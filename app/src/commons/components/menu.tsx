import { Image } from "@nextui-org/image";
import icon from "/icon.svg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "@nextui-org/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Menu(){
    const [menuOpen, setMenuOpen] = useState(false) 
    
    const navigate = useNavigate()

    const logoutHandler = () => {
        window.localStorage.removeItem('loggedUser')
        navigate('/auth')
    }

    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className="fixed w-full h-24 shadow-xl bg-white">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <div className="flex">
                    <Image
                        src={icon}
                        alt='Cocktail Manager Icon'
                        width={45}
                    />
                </div>
                <div className="hidden sm:flex">
                    <div>
                        <ul className="hidden sm:flex">
                            <Link className="ml-10 uppercase hover:border-main-color text-xl" underline="hover" color="foreground" onClick={() => navigate('/cocktails')}>
                                <li className="hover:bg-horved-main-color hover:text-white p-2 rounded-lg text-xl">Cocktails</li>
                            </Link>
                            <Link className="ml-10 uppercase hover:border-main-color text-xl" underline="hover" color="foreground" onClick={() => navigate('/add-cocktail')}>
                                <li className="hover:bg-horved-main-color hover:text-white p-2 rounded-lg text-xl">Add Cocktail</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="hidden sm:flex">
                    <div>
                        <button 
                            data-testid='logout-button'
                            onClick={logoutHandler}
                            className="text-white bg-main-color hover:bg-horved-main-color font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                        >Logout</button>
                    </div>
                </div>
                <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            <div className={
                menuOpen
                ?
                    "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#f0f0f0] p-10 ease-in duration-500"
                :
                    "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25}/>
                    </div>
                </div>
                <div className="flex-col justify-between">
                    <div>
                        <ul>
                        <Link underline="hover" color="foreground" onPress={() => navigate('/cocktails')}>
                            <li 
                                className="py-4 cursor-pointer"
                                onClick={() => setMenuOpen(false)}
                            >
                                Cocktails
                            </li>
                        </Link>
                        <Link underline="hover" color="foreground" onPress={() => navigate('/add-cocktail')}>
                            <li 
                                className="py-4 cursor-pointer"
                                onClick={() => setMenuOpen(false)}
                            >
                                Add Cocktail
                            </li>
                        </Link><Link underline="hover" color="foreground" onPress={logoutHandler}>
                            <li
                                className="py-4 cursor-pointer text-red-600"
                                onClick={() => setMenuOpen(false)}
                            >
                                Logout
                            </li>
                        </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
    