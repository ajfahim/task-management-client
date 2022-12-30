import { Button, Typography } from '@material-tailwind/react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { ReactElement } from 'react';
import TaskCard from '../../components/TaskCard/TaskCard';

const MyTask = () => {

    const queryClient = useQueryClient();
    const getTasks = async () => {
        const res = await axios.get("http://localhost:5000/task");
        console.log(res.data)
        return res.data
    }

    const { data } = useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks

    })

    // interface ITasksPropss {

    //     _id: string,
    //     task: string,
    //     createdAt: boolean,
    //     imageURL: string

    // }

    return (
        <div className='w-full'>
            <Typography variant="h3">My Tasks</Typography>
            <div className='mt-14 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-20'>
                {
                    data?.map((item: any) => (
                        <TaskCard key={item._id} {...item}></TaskCard>
                    ))
                }

            </div>
        </div>
    );
};

export default MyTask;