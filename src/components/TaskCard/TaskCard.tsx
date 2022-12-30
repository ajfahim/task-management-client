import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    IconButton,
    Button,
} from "@material-tailwind/react";
import { FC, useState } from "react";
import placeholderImage from "../../assets/placeholder.jpg";
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa'
import DeleteModal from "../shared/DeleteModal/DeleteModal";
import EditModal from "../shared/EditModal/EditModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

type ITasksProps = {
    _id: string,
    task: string,
    createdAt: boolean,
    imageURL: string,
    isCompleted: boolean
}



const TaskCard: FC<ITasksProps> = ({ _id, imageURL, createdAt, task, isCompleted }) => {
    // console.log(_id)
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [complete, setComplete] = useState(false)


    const queryClient = useQueryClient()
    type mutate = {
        isCompleted: boolean

    }


    const updateTask = async (data: mutate,) => {
        const res = await axios.put(`https://task-management-server-ajfahim.vercel.app/task/${_id}`, data)
        console.log(res)
        return res.data
    }


    const completeMutation = useMutation({
        mutationFn: updateTask,
        onSuccess: () => {
            toast.success("Changed status");
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            // setEditOpen(!editOpen)

        }
    })

    const handleDetails = (_id: string) => {
        console.log("clicked card", _id)
    }

    const handleComplete = () => {
        completeMutation.mutate(
            {
                isCompleted: !isCompleted

            }
        )
    }

    const handleDelete = (_id: string) => {
        setOpen(!open)

    }
    const handleEdit = (_id: string) => {
        setEditOpen(!editOpen)

    }

    return (
        <div>
            <Card className="w-80">
                <CardHeader color="blue" className="relative h-56">
                    <img
                        src={imageURL.length >= 1 ? imageURL : placeholderImage}
                        alt="img-blur-shadow"
                        className="h-full w-full"
                    />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2">
                        {task}
                    </Typography>

                </CardBody>
                <CardFooter divider className="flex flex-col items-center justify-center gap-3">
                    <div className="flex items-center justify-center gap-3 py-3">
                        <IconButton size="sm" onClick={() => { handleDelete(_id) }} variant="outlined" color="red">
                            <FaRegTrashAlt size={25} />
                        </IconButton>
                        <IconButton size="sm" onClick={() => { handleEdit(_id) }} variant="outlined" color="cyan">
                            <FaEdit size={25} />
                        </IconButton>
                    </div>
                    <div className="flex items-center justify-center gap-3 py-3">
                        {
                            isCompleted === false ?
                                <Button onClick={handleComplete} size="sm" variant="outlined" color="green">Mark as Complete</Button>
                                :
                                <Button onClick={handleComplete} size="sm" variant="outlined" color="red">Mark as Incomplete</Button>
                        }

                        <Button size="sm" variant="outlined"><Link to={`/task/${_id}`}>Details</Link></Button>
                    </div>
                </CardFooter>
            </Card>
            <DeleteModal open={open} setOpen={setOpen} task={task} _id={_id}></DeleteModal>
            <EditModal editOpen={editOpen} setEditOpen={setEditOpen} task={task} _id={_id}></EditModal>
        </div>
    );
};

export default TaskCard;