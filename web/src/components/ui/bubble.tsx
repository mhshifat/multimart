import { PropsWithChildren } from "react";

interface BubbleProps {
    count: () => number | string,
    hideOnZero?: boolean
}

export default function Bubble({ children, count, hideOnZero }: PropsWithChildren<BubbleProps>) {
    console.log(hideOnZero, count());
    const renderBubble = ()=>{
        if(hideOnZero && String(count()) === '0') return null
        if(count() === '') return null
        return (
            <span className="absolute -right-[8px] -top-[8px] w-[16px] h-[16px] rounded-full font-Mulish text-[10px] font-[700] leading-[120%] -tracking[0.2px] uppercase bg-black text-white flex justify-center items-center">
                {
                    count()
                }
            </span>
        )
    }
    return (
        <div className="inline-block w-max h-max relative">
            {
                renderBubble()
            }
            {children}
        </div>
    )
}