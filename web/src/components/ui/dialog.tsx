import { ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from 'react';
import Portal from '../shared/portal';

interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {

}

interface DialogCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

interface DialogProps {
    open: boolean
    onClose: ()=>void
    animationsClasses?: [string, string]
    children: (args: {
        Content: (args: PropsWithChildren<DialogContentProps>) => JSX.Element,
        Close: (args: PropsWithChildren<DialogCloseProps>) => JSX.Element,
    }) => JSX.Element
}

let renderedFirstTime = false;
export default function Dialog({ open = false, children, onClose, animationsClasses }: DialogProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(open);
  const startAnimationClass = animationsClasses?.[0] ?? "animate-[scaleYStart_200ms]";
  const endAnimationClass = animationsClasses?.[1] ?? "animate-[scaleYEnd_200ms]";

  useEffect(() => {
    const el = document.querySelector("html");
    if (el) {
      el.style.overflow = isOpen ? 'hidden' : 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    if (!contentRef.current) return;
    if (isOpen && !renderedFirstTime) {
      contentRef.current.classList.add(startAnimationClass);
    } else {
      contentRef.current.classList.remove(startAnimationClass);
    }
  }, [isOpen, startAnimationClass]);

  useEffect(() => {
    if (open) setIsOpen(true);
    else {
      handleCloseAnimation();
    }
  }, [open])

  useEffect(() => {
    const elementRef = contentRef.current;
    if(!elementRef) return;
    const handleAnimationEnd = () => {
      if (elementRef.classList.contains(endAnimationClass)) {
        elementRef.classList.add("opacity-0");
        elementRef.classList.add("scale-0");
        setIsOpen(false);
        onClose && onClose?.();
      }
    }

    elementRef.addEventListener("animationend", handleAnimationEnd)

    return () => {
      elementRef?.removeEventListener("animationend", handleAnimationEnd)
    }
  });

  function handleCloseAnimation() {
    if (contentRef.current) {
      contentRef.current.classList.remove(startAnimationClass);
      contentRef.current.classList.add(endAnimationClass);
    }
  }

  return (
    <>
      {children?.({
        Content: ({ children, className, ...props }) => (
          <Portal>
            {isOpen && (
              <>
                <div
                  className='bg-[rgba(0,0,0,0.30)] fixed inset-0 z-[999]'
                  onClick={handleCloseAnimation}
                />
                <div ref={contentRef} className={`fixed z-[999] w-full will-change-transform origin-bottom ${className ?? ""}`} {...props}>
                  {children}
                </div>
              </>
            )}
          </Portal>
        ),
        Close: ({ children, ...props }) => (
          <button 
            {...props}
            // onClick={() => onClose ? onClose?.(false) : setIsOpen(false)}
            onClick={handleCloseAnimation}
          >
            {children}
          </button>
        )
      })}
    </>
  )
}