import { useEffect, useState } from 'react';
import Portal from './portal';
import { DayPicker } from 'react-day-picker';
import { usePopper } from 'react-popper';
import { format } from 'date-fns';

interface DatePickerProps {
    isMobile: boolean
    onChange: ()=>void
    placeholder: string
    value: Date
}

export default function DatePicker({ isMobile, onChange, placeholder = 'Select a date', value }: DatePickerProps) {
  const [selected, setSelected] = useState(value);
  const [showPicker, setShowPicker] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      { name: "offset", options: { offset: [0, 10] } }
    ],
  });

  useEffect(() => {
    if (!popperElement || !referenceElement) return;
    const handleOutsideClick = (e) => {
      if (!popperElement.contains(e.target) && !referenceElement.contains(e.target)) {
        setShowPicker(false);
      }
    }
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    }
  }, [popperElement, referenceElement])

  return (
    <>
      <div ref={setReferenceElement} onClick={() => setShowPicker(value => !value)} className={`${isMobile ? "h-[49px]" : "relative h-[60px]"} cursor-pointer w-full form-input border border-solid border-[#DCDCDC] rounded-lg text-black text-sm font-normal font-Open-Sans ${isMobile ? "text-[14px] tracking-[0.28px]" : "text-[16px] tracking-[0.48px]"} font-[400] leading-[140%] flex items-center gap-5`}>
        <span className={`flex-1 ${selected ? "text-[#000]" : "text-[#9C9C9C]"} font-Open-Sans text-[16px] font-[400] leading-[140%] tracking-[0.76px] lowercase`}>{selected ? format(new Date(selected), "MM/dd/yyyy") : placeholder}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M14.0118 1.09107H13.5297V0.544643C13.5297 0.2875 13.3047 0.0625 13.0475 0.0625C12.7904 0.0625 12.5654 0.2875 12.5654 0.544643V1.09107H5.42969V0.544643C5.42969 0.2875 5.20469 0.0625 4.94755 0.0625C4.6904 0.0625 4.4654 0.2875 4.4654 0.544643V1.09107H3.98326C2.31183 1.09107 0.929688 2.47321 0.929688 4.14464V14.2054C0.929688 15.8768 2.31183 17.2589 3.98326 17.2589H14.044C15.7154 17.2589 17.0975 15.8768 17.0975 14.2054V4.14464C17.0654 2.47321 15.7154 1.09107 14.0118 1.09107ZM16.1011 14.2054C16.1011 15.3625 15.169 16.2946 14.0118 16.2946H3.98326C2.82612 16.2946 1.89397 15.3625 1.89397 14.2054V7.0375H16.1333V14.2054H16.1011ZM16.1011 6.07322H1.89397V4.14464C1.89397 2.9875 2.82612 2.05536 3.98326 2.05536H4.4654V2.60179C4.4654 2.85893 4.6904 3.08393 4.94755 3.08393C5.20469 3.08393 5.42969 2.85893 5.42969 2.60179V2.05536H12.5654V2.60179C12.5654 2.85893 12.7904 3.08393 13.0475 3.08393C13.3047 3.08393 13.5297 2.85893 13.5297 2.60179V2.05536H14.0118C15.169 2.05536 16.1011 2.9875 16.1011 4.14464V6.07322Z"
            fill="#9C9C9C"
          />
          <path
            d="M5.87857 9.19308C5.87857 9.45022 5.65357 9.67522 5.39643 9.67522H3.98214C3.725 9.67522 3.5 9.45022 3.5 9.19308C3.5 8.93594 3.725 8.71094 3.98214 8.71094H5.39643C5.65357 8.71094 5.87857 8.93594 5.87857 9.19308Z"
            fill="#9C9C9C"
          />
          <path
            d="M10.1833 9.19308C10.1833 9.45022 9.95826 9.67522 9.70112 9.67522H8.28683C8.02969 9.67522 7.80469 9.45022 7.80469 9.19308C7.80469 8.93594 8.02969 8.71094 8.28683 8.71094H9.70112C9.95826 8.71094 10.1833 8.93594 10.1833 9.19308Z"
            fill="#9C9C9C"
          />
          <path
            d="M14.4879 9.19308C14.4879 9.45022 14.2629 9.67522 14.0058 9.67522H12.5915C12.3344 9.67522 12.1094 9.45022 12.1094 9.19308C12.1094 8.93594 12.3344 8.71094 12.5915 8.71094H14.0058C14.2951 8.71094 14.4879 8.93594 14.4879 9.19308Z"
            fill="#9C9C9C"
          />
          <path
            d="M5.87857 11.5681C5.87857 11.8252 5.65357 12.0502 5.39643 12.0502H3.98214C3.725 12.0502 3.5 11.8252 3.5 11.5681C3.5 11.3109 3.725 11.0859 3.98214 11.0859H5.39643C5.65357 11.0859 5.87857 11.3109 5.87857 11.5681Z"
            fill="#9C9C9C"
          />
          <path
            d="M10.1833 11.5681C10.1833 11.8252 9.95826 12.0502 9.70112 12.0502H8.28683C8.02969 12.0502 7.80469 11.8252 7.80469 11.5681C7.80469 11.3109 8.02969 11.0859 8.28683 11.0859H9.70112C9.95826 11.0859 10.1833 11.3109 10.1833 11.5681Z"
            fill="#9C9C9C"
          />
          <path
            d="M14.4879 11.5681C14.4879 11.8252 14.2629 12.0502 14.0058 12.0502H12.5915C12.3344 12.0502 12.1094 11.8252 12.1094 11.5681C12.1094 11.3109 12.3344 11.0859 12.5915 11.0859H14.0058C14.2951 11.0859 14.4879 11.3109 14.4879 11.5681Z"
            fill="#9C9C9C"
          />
          <path
            d="M5.87857 13.9509C5.87857 14.208 5.65357 14.433 5.39643 14.433H3.98214C3.725 14.433 3.5 14.208 3.5 13.9509C3.5 13.6937 3.725 13.4688 3.98214 13.4688H5.39643C5.65357 13.4688 5.87857 13.6937 5.87857 13.9509Z"
            fill="#9C9C9C"
          />
          <path
            d="M10.1833 13.9509C10.1833 14.208 9.95826 14.433 9.70112 14.433H8.28683C8.02969 14.433 7.80469 14.208 7.80469 13.9509C7.80469 13.6937 8.02969 13.4688 8.28683 13.4688H9.70112C9.95826 13.4688 10.1833 13.6937 10.1833 13.9509Z"
            fill="#9C9C9C"
          />
          <path
            d="M14.4879 13.9509C14.4879 14.208 14.2629 14.433 14.0058 14.433H12.5915C12.3344 14.433 12.1094 14.208 12.1094 13.9509C12.1094 13.6937 12.3344 13.4688 12.5915 13.4688H14.0058C14.2951 13.4688 14.4879 13.6937 14.4879 13.9509Z"
            fill="#9C9C9C"
          />
        </svg>
      </div>
      {showPicker && (
        <Portal>
          <div ref={setPopperElement} style={{...styles.popper, ...(referenceElement?.getBoundingClientRect()?.width !== undefined && referenceElement?.getBoundingClientRect()?.width > 300) ?{width: referenceElement?.getBoundingClientRect()?.width}:{} }} {...attributes.popper} className='bg-white shadow-md rounded-lg [&_.rdp-month]:w-full [&_.rdp-table]:max-w-full [&_.rdp-table]:w-full [&_.rdp-cell>.rdp-button]:w-full [&_.rdp-cell>.rdp-button]:aspect-square [&_.rdp-cell>.rdp-button]:max-w-full [&_.rdp-cell>.rdp-button]:h-auto [&_.rdp-cell>.rdp-button.rdp-day_selected]:bg-[#000]'>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(args) => {
                setSelected(args);
                setShowPicker(false);
                onChange?.(args);
              }}
              showOutsideDays
            />
          </div>
        </Portal>
      )}
    </>
  )
}
