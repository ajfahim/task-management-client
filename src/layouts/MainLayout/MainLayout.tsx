
import { Outlet } from 'react-router';
import NavBar from '../../components/shared/NavBar/NavBar';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='mx-auto max-w-screen-xl flex items-center justify-center'> <Outlet></Outlet></div>
        </div>
    );
};

export default MainLayout;