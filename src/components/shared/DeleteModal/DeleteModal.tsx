import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogFooter,
} from "@material-tailwind/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";
type deleteModalProps = {
    open: boolean;
    setOpen(open: boolean): void;
    task: string,
    _id: string
}

const DeleteModal = ({ open, setOpen, task, _id }: deleteModalProps) => {

    const queryClient = useQueryClient()
    const deleteTask = async (data: string) => {
        const res = await axios.delete(`http://localhost:5000/task/${data}`)
        return (res.data)
    }
    const deleteMutation = useMutation({
        mutationFn: deleteTask,
        onSuccess: () => {
            toast.success("Item deleted");
            queryClient.invalidateQueries({ queryKey: ['tasks'] })

        }

    })


    const handleSubmit = () => {
        deleteMutation.mutate(_id);
    }

    return (

        <Fragment>
            <Dialog open={open} handler={() => setOpen(!open)}>
                <DialogHeader>Do you really want to delete {task}?</DialogHeader>

                <DialogFooter>
                    <Button
                        variant="text"
                        color="green"
                        onClick={() => setOpen(!open)}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="red" onClick={handleSubmit}>
                        <span>Yes</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </Fragment>

    );
};

export default DeleteModal;