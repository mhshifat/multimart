"use client";
import { useTheme } from "@/hooks";
import { PropsWithChildren } from "react";

interface ContainerProps {
  escape?: 'left' | 'right';
}

const escapedClasses: Record<Required<ContainerProps>['escape'], string> = {
  left: "ml-[calc(-50vw+50%)]",
  right: "mr-[calc(-50vw+50%)]",
}

export default function Container({ children, escape }: PropsWithChildren<ContainerProps>) {
  const { theme } = useTheme();

  return (
    <div className="w-full md:w-[664px] lg:w-[900px] xl:w-[1200px] 2xl:w-[1400px] mx-auto max-w-full px-[30px] flex items-center justify-center">
      <div className={`w-screen max-w-[100vw] ${escape ? escapedClasses[escape] : ''}`}>
        {children}
      </div>
    </div>
  )
}