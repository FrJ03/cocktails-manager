'use client'
import React from "react";
import { CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { ClosedEye } from "./closed-eye";
import { OpenedEye } from "./opened-eye";

interface AuthFormBodyProperties{
    email: string,
    onChangeEmail: (newEmail: string) => void,
    password: string,
    onChangePassword: (newPassword: string) => void
}

export default function AuthFormBody(properties: AuthFormBodyProperties){
    const [isVisible, setIsVisible] = React.useState(false);

   const toggleVisibility = () => setIsVisible(!isVisible);
    return (
        <>
            <CardBody className="flex-col content-center w-full">
                <Input
                    data-testid='email-input'
                    fullWidth={true}
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    value={properties.email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => properties.onChangeEmail(event.target.value)}
                />
                <Input
                    data-testid='password-input'
                    fullWidth={true}
                    label="Password"
                    variant="bordered"
                    value={properties.password}
                    placeholder="Enter your password"
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                            <ClosedEye className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <OpenedEye className="text-2xl text-default-400 pointer-events-none" />
                        )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => properties.onChangePassword(event.target.value)}
                    />
                
            </CardBody>
        </>
    )
}