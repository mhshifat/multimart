"use client"

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{

}

export default function Button({children, ...props}: ButtonProps){
    return (
        <button aria-label="button" {...props}>
            {children}
        </button>
    )
} 