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

type ITasksProps = {
    _id: string,
    task: string,
    createdAt: boolean,
    imageURL: string


}



const TaskCard: FC<ITasksProps> = ({ _id, imageURL, createdAt, task }) => {
    // console.log(_id)
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);

    const handleClick = (_id: string) => {
        console.log("clicked card", _id)
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
                        <Button size="sm" variant="outlined">Mark as Complete</Button>
                        <Button size="sm" variant="outlined">Details</Button>
                    </div>
                </CardFooter>
            </Card>
            <DeleteModal open={open} setOpen={setOpen} task={task} _id={_id}></DeleteModal>
            <EditModal editOpen={editOpen} setEditOpen={setEditOpen} task={task} _id={_id}></EditModal>
        </div>
    );
};

export default TaskCard;