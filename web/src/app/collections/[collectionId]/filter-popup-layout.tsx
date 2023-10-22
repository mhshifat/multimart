import { PropsWithChildren } from "react";

interface FilterPopupLayoutProps {
    title: string
}

export default function FilterPopupLayout({children, title}: PropsWithChildren<FilterPopupLayoutProps>) {
    return ( 
        <div className="flex flex-col border rounded-md p-[20px] w-[50%]">
            <h3 className="uppercase font-Mulish leading-[120%] text-black font-[700] text-[32px]"
            >{title}</h3>
            <div className="h-[2px] my-[20px]" style={{background: "linear-gradient(90deg, rgba(189, 189, 189, 0.00) 1.04%, #BFBFBF 51.84%, rgba(169, 169, 169, 0.00) 100%)"}} />
            {children}
        </div>
    )
}