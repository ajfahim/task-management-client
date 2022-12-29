import { Button, Input, Typography } from '@material-tailwind/react';
import React from 'react';

const AddTask = () => {
    return (
        <div className='w-full'>
            <Typography variant="h3">Add New Task</Typography>
            <form>
                <div className='mt-10 w-full'>
                    <Input color='teal' size="lg" label="Add New Task" variant='standard' />
                </div>
                <Button color='teal' className='mt-5'>Submit</Button>
            </form>
        </div>
    );
};

export default AddTask;