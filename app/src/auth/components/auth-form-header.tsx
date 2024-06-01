import { CardHeader } from "@nextui-org/card";
import logo from "/logo.svg"
import { Image } from "@nextui-org/image";

export default function AuthFormHeader(){
    return (
        <>
            <CardHeader className="flex-col">
                <div className='w-1/10'>
                <Image
                    src={logo}
                    alt='Cocktail Manager logo'
                    width={400}
                /></div>
                <h1 className="text-4xl">
                    <strong>Sign Up</strong>
                </h1>
            </CardHeader>
        </>
    )
}