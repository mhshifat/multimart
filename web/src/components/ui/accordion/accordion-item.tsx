import { Dispatch, PropsWithChildren, ReactElement, SetStateAction, useId } from "react"

interface AccordionItemProps {
    renderHeader: ()=>JSX.Element
    setOpen: Dispatch<SetStateAction<string>>
    open: string
}

export default function AccordionItem({
    children,
    renderHeader,
    setOpen,
    open,
  }: PropsWithChildren<AccordionItemProps>) {
    const id = useId();
    return (
      <div className="w-full">
        <div
          className="flex items-center gap-5 justify-between relative"
          onClick={() =>
            setOpen((value) =>
              value === `accordion-${id}` ? "" : `accordion-${id}`,
            )
          }
        >
          {renderHeader?.()}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={10}
            viewBox="0 0 16 10"
            fill="none"
            className="transition"
            style={{
              transform: `rotate(${open === `accordion-${id}` ? '180deg' : '0'})`,
            }}
          >
            <path
              d="M2.16663 2.08301L7.99996 7.91634L13.8333 2.08301"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="square"
            />
          </svg>
        </div>
        {open === `accordion-${id}` && children}
      </div>
    );
  }