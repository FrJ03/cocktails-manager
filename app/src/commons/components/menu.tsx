import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenu, 
  NavbarMenuItem, 
  NavbarMenuToggle
} from "@nextui-org/navbar";
import { Image } from "@nextui-org/image";
import icon from "/icon.svg"
import menu from '/menu-icon.svg'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "@nextui-org/react";

export default function Menu(){
    const [token, setToken] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navigate = useNavigate()

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            const userLogged = JSON.parse(loggedUserJSON)
            setUsername(userLogged.username)
            setEmail(userLogged.email)
            setToken(userLogged.token)
        }
        else{
            //navigate('/auth')
        }
    }, [])

    const logoutHandler = () => {
        window.localStorage.removeItem('loggedUser')
        setToken('')
        setUsername('')
        setEmail('')
        navigate('/auth')
    }

    const menuIcon = <Image
                      src={menu}
                      alt='Cocktail Manager Icon'
                      width={45}
                    />

    return (
        <Navbar className="shadow-md" isBordered onMenuOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
            <NavbarContent>
                <NavbarMenuToggle
                    icon={menuIcon}
                    className="sm:hidden"
                    srOnlyText=' '
                />
                <NavbarBrand>
                    <Image
                        src={icon}
                        alt='Cocktail Manager Icon'
                        width={45}
                    />
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4 p-2 rounded-t-xl hover:bg-main-color hover:text-white" justify="center">
                <NavbarItem>
                    <Link underline="hover" color="foreground" onPress={() => navigate('/cocktails')}>
                        Cocktails
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <button 
                        data-testid='logout-button'
                        onClick={logoutHandler}
                        className="text-white bg-main-color hover:bg-horved-main-color font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                    >Logout</button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                <NavbarMenuItem>
                    <Link
                        className="w-full"
                        onPress={() => navigate('/cocktails')}
                        size="lg"
                    >
                        Cocktails
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
    