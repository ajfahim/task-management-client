import { RouterProvider } from 'react-router';
import router from './routes/route';


function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
