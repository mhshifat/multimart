import {Children, PropsWithChildren, ReactElement, cloneElement, useId, useState} from 'react';
import AccordionItem from './accordion-item';

interface AccordionProps {
    className: string
    renderHeader: () => JSX.Element
}

export default function Accordion({className, children, renderHeader}: PropsWithChildren<AccordionProps>) {
  const [open, setOpen] = useState('');
  return (
    <div className={`w-full ${className ?? ''}`}>
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement, {
          open,
          setOpen,
          renderHeader,
        }),
      )}
    </div>
  );
}

Accordion.Item = AccordionItem;