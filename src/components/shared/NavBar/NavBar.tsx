import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Logo from '../../../assets/logo.png'

const NavBar = () => {

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-semibold"
            >
                <Link to="/" className="flex items-center">
                    Add Task
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-semibold"
            >
                <Link to="/" className="flex items-center">
                    My Task
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-semibold"
            >
                <Link to="/" className="flex items-center">
                    Completed Task
                </Link>
            </Typography>

        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-screen-xl py-2 px-4 mb-14 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <div className="flex items-center">
                    <img src={Logo} alt="" className="h-9 mr-3" />
                    <Typography
                        as="a"
                        variant="h4"
                        className="mr-4 cursor-pointer py-1.5 font-black"
                    >
                        <Link to="/">Pro Tasker</Link>
                    </Typography>
                </div>
                <div className="hidden lg:block">{navList}</div>

                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
                <div className="ml-3">
                    <Menu>
                        <MenuHandler>
                            <Avatar src="data:image/png;base64,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" alt="avatar" variant="circular" />
                        </MenuHandler>
                        <MenuList>
                            <MenuItem>Login</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </div>
            <MobileNav open={openNav}>
                {navList}

            </MobileNav>

        </Navbar>
    );
}


export default NavBar;