import { CardHeader } from "@nextui-org/card";
import Image from "next/image";
import logo from "@/public/logo.svg"

export default function AuthFormHeader(){
    return (
        <>
            <CardHeader className="flex-col">
                <div className='w-1/10'>
                <Image
                    src={logo}
                    alt='Cocktail Manager logo'
                    layout="responsive"
                /></div>
                <h1 className="text-4xl">
                    <strong>Sign Up</strong>
                </h1>
            </CardHeader>
        </>
    )
}