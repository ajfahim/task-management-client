import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogFooter,
    DialogBody,
    Typography,
    Input,
} from "@material-tailwind/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";
import DropZone from "../DropZone/DropZone";
type editModalProps = {
    editOpen: boolean;
    setEditOpen(editOpen: boolean): void;
    task: string,
    _id: string
}

const EditModal = ({ editOpen, setEditOpen, task, _id }: editModalProps) => {

    const [editImageURL, setEditImageURL] = useState("")
    const [editTask, setEditTask] = useState("");

    const queryClient = useQueryClient()
    type mutate = {
        imageURL: string;
        task: string;

    }


    const updateTask = async (data: mutate,) => {
        const res = await axios.put(`http://localhost:5000/task/${_id}`, data)
        console.log(res)
        return res.data
    }


    const editMutation = useMutation({
        mutationFn: updateTask,
        onSuccess: () => {
            toast.success("Data added successfully");
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            setEditOpen(!editOpen)

        }
    })


    const handleSubmit = () => {


        editMutation.mutate(
            {
                imageURL: editImageURL,
                task: editTask,

            }
        )
    }
    console.log(editTask)

    return (

        <Fragment>
            <Dialog open={editOpen} handler={() => setEditOpen(!editOpen)}>
                <DialogHeader>Edit {task}</DialogHeader>

                <DialogBody divider>
                    <div className='w-full'>

                        <form>
                            <div className='mt-10'>
                                <div className="w-full" ><DropZone setImageURL={setEditImageURL}></DropZone></div>
                                <div className="w-full">
                                    <Input defaultValue={task} onChange={(e) => setEditTask(e.target.value)} color='teal' size="lg" label="Add New Task" variant='standard' />
                                </div>
                            </div>

                        </form>

                    </div>
                </DialogBody>

                <DialogFooter>
                    <Button
                        variant="text"
                        color="green"
                        onClick={() => setEditOpen(!editOpen)}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        color='teal'

                        disabled={editTask.length >= 1 ? false : true}
                    >Submit
                    </Button>
                </DialogFooter>
            </Dialog>
        </Fragment>

    );
};

export default EditModal;