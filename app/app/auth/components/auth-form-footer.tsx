import { CardFooter } from "@nextui-org/card"

interface AuthFormFooterProperties{
    onSubmit: () => void
}

export default function AuthFormFooter(properties: AuthFormFooterProperties){
    return (
        <>
        <div className="self-center w-max">
            <CardFooter className="flex flex-wrap gap-4 items-center content-center">
                <button
                    onClick={properties.onSubmit}
                    className="text-white bg-main-color hover:bg-horved-main-color font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                >
                    Sign in
                </button> 
            </CardFooter></div>
        </>
    )
}