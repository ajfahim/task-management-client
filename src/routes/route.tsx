import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AddTask from "../pages/AddTask/AddTask";
import CompletedTask from "../pages/CompletedTask/CompletedTask";
import MyTask from "../pages/MyTask/MyTask";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <MyTask></MyTask>
            },
            {
                path: "/add-task",
                element: <AddTask></AddTask>
            },
            {
                path: "/completed-task",
                element: <CompletedTask></CompletedTask>
            }
        ]
    }
]);
export default router