import { Button, Input, Typography } from '@material-tailwind/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import DropZone from '../../components/shared/DropZone/DropZone.jsx';

import FileUploader from '../../components/shared/DropZone/FileUploader';

const AddTask = () => {

    // const queryClient = useQueryClient();

    // const postTask = async (data) => {
    //     const res = await axios.post("http://localhost:5000/task", data)
    //     return res.data
    // }

    // const taskMutation = useMutation({

    // })
    return (
        <div className='w-full'>
            <Typography variant="h3">Add New Task</Typography>
            <form>
                <div className='mt-10'>
                    <div className="w-full" ><DropZone></DropZone></div>
                    <div className="w-full">
                        <Input color='teal' size="lg" label="Add New Task" variant='standard' />
                    </div>
                </div>

                <div className="w-full flex justify-center"> <Button color='teal' className='mt-5 mx-auto'>Submit</Button></div>
            </form>

        </div>
    );
};

export default AddTask;