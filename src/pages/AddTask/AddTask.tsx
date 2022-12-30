import { Button, Input, Typography } from '@material-tailwind/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import DropZone from '../../components/shared/DropZone/DropZone.jsx';



const AddTask = () => {


    const [imageURL, setImageURL] = useState("")
    const [task, setTask] = useState("");
    // console.log("url from add task= ", imageURL)
    // console.log("Task: ", task)


    const queryClient = useQueryClient();

    type mutate = {
        imageURL: string;
        task: string;
        createdAt: number;
        isCompleted: boolean;
    }


    const postTask = async (data: mutate) => {
        const res = await axios.post("https://task-management-server-ajfahim.vercel.app/task", data)
        console.log(res)
        return res.data
    }
    const navigate = useNavigate();

    const taskMutation = useMutation({
        mutationFn: postTask,
        onSuccess: () => {
            toast.success("Data added successfully");
            queryClient.invalidateQueries({ queryKey: ['tasks'] })
            navigate('/')
        }
    })


    const handleSubmit = () => {


        taskMutation.mutate(
            {
                imageURL: imageURL,
                task: task,
                createdAt: Date.now(),
                isCompleted: false
            }
        )
    }



    return (
        <div className='w-full'>
            <Typography variant="h3">Add New Task</Typography>
            <form>
                <div className='mt-10'>
                    <div className="w-full" ><DropZone setImageURL={setImageURL}></DropZone></div>
                    <div className="w-full">
                        <Input onChange={(e) => setTask(e.target.value)} color='teal' size="lg" label="Add New Task" variant='standard' />
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <Button
                        onClick={handleSubmit}
                        color='teal'
                        className='mt-5 mx-auto'
                        disabled={task.length >= 1 ? false : true}
                    >Submit
                    </Button>
                </div>
            </form>

        </div>
    );
};

export default AddTask;