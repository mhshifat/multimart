import { createPortal } from "react-dom";
import { ClientOnly } from ".";
import { PropsWithChildren } from "react";

export default function Portal({ children }: PropsWithChildren) {
  return (
    <ClientOnly>
      {createPortal(children, document.querySelector('body')!)}
    </ClientOnly>
  )
}