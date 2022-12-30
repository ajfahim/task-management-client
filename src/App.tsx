import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router';
import router from './routes/route';


function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </>
  );
}

export default App;
