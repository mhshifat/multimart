import { PropsWithChildren } from "react";

interface FilterPopupLayoutProps {
    title: string
}

export default function FilterPopupLayout({children, title}: PropsWithChildren<FilterPopupLayoutProps>) {
    return ( 
        <div className="flex flex-col border border-[#f5f5f5] rounded-lg p-[20px] lg:max-w-[370px] w-full">
            <h3 className="uppercase font-Mulish leading-[120%] text-black font-[700] text-[16px] -tracking[.32px]"
            >{title}</h3>
            <div className="h-[1px] mb-[20px] mt-[16px]" style={{background: "linear-gradient(90deg, rgba(189, 189, 189, 0.00) 1.04%, #BFBFBF 51.84%, rgba(169, 169, 169, 0.00) 100%)"}} />
            {children}
        </div>
    )
}