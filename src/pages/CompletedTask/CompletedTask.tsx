import { Typography } from '@material-tailwind/react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import TaskCard from '../../components/TaskCard/TaskCard';

const CompletedTask = () => {

    const queryClient = useQueryClient();
    const getTasks = async () => {
        const res = await axios.get("https://task-management-server-ajfahim.vercel.app/task");
        console.log(res.data)
        return res.data
    }

    const { data } = useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks

    })
    return (
        <div className='w-full'>
            <Typography variant="h3">Completed Tasks</Typography>
            <div className='my-14 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-20 gap-x-10'>
                {/* {
                    data?.map((item: any) => (
                        <TaskCard key={item._id} {...item}></TaskCard>
                    ))
                } */}
                {
                    data.length > 0 ? data?.filter((item: any) => item.isCompleted === true).map((item: any) => (
                        <TaskCard key={item._id} {...item}></TaskCard>
                    ))
                        :
                        <p>Loading...</p>
                }

            </div>
        </div>
    );
};

export default CompletedTask;