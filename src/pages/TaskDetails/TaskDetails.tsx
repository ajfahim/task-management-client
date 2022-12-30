import { Chip, Typography } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetails = () => {
    const { id } = useParams()
    const getTaskDetails = async () => {
        const res = await axios.get(`http://localhost:5000/task/${id}`);
        return res.data
    }

    const { data: taskDetails } = useQuery({
        queryKey: ["tasks"],
        queryFn: getTaskDetails
    })
    console.log(taskDetails)

    return (
        <div className='w-full'>
            <img className='mx-auto' src={taskDetails?.imageURL} alt="" />
            <Typography variant="h5" className="mb-2">
                {taskDetails?.task}
            </Typography>
            <Chip variant='gradient' color={taskDetails?.isCompleted === true ? "green" : "red"}
                value={taskDetails?.isCompleted === true ? "completed" : "not completed"} />

        </div>
    );
};

export default TaskDetails;