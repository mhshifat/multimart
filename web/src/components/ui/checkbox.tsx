import {Children, PropsWithChildren, ReactElement, ReactNode, cloneElement, useEffect, useState} from 'react';

interface IRenderItem {
        checked: boolean
        value: string
        icon?: ReactElement,
        itemIndex?: number,
        totalItem?: number,
} 

interface CheckboxItemProps {
  value: string,
  className?: string[],
  onChange?: (value: string, checked: boolean) => void,
  renderItem?: (values: IRenderItem)=>ReactNode
  checkedIcon?: ReactElement,
  uncheckedIcon?: ReactElement,
  itemIndex?: number,
  totalItem?: number,
  values?: string[],
}

interface CheckboxProps {
  className?: string,
  onChange?: (value: string) => void,
  renderItem?: (values: IRenderItem)=>ReactNode,
  checkedIcon?: ReactElement,
  uncheckedIcon?: ReactElement,
  single?: boolean,
  defaultValue?: string,
}

const CheckboxItem = ({
  value,
  className,
  onChange,
  renderItem,
  checkedIcon,
  uncheckedIcon,
  itemIndex,
  totalItem,
  values = [],
}: CheckboxItemProps) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (values.includes(value)) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [values]);

  return renderItem ? (
    <label className={`w-full cursor-pointer ${className}`}>
      <input
        className="hidden"
        type="checkbox"
        checked={checked}
        onChange={({target}) => {
          setChecked(target.checked);
          onChange?.(value, target.checked);
        }}
      />
      {renderItem({
        checked,
        value,
        icon: checked ? checkedIcon : uncheckedIcon,
        itemIndex,
        totalItem,
      })}
    </label>
  ) : (
    <label className={`flex items-center gap-[8px] ${className ?? ''}`}>
      <input
        className="hidden"
        type="checkbox"
        checked={checked}
        onChange={({target}) => {
          setChecked(target.checked);
          onChange?.(value, target.checked);
        }}
      />
      <span className="flex items-center justify-center w-[20px] h-[20px]">
        {!checked ? (
          <>
            {uncheckedIcon ?? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M0.666687 5.66699C0.666687 2.90557 2.90526 0.666992 5.66669 0.666992H12.3334C15.0948 0.666992 17.3334 2.90557 17.3334 5.66699V12.3337C17.3334 15.0951 15.0948 17.3337 12.3334 17.3337H5.66669C2.90526 17.3337 0.666687 15.0951 0.666687 12.3337V5.66699Z"
                  stroke="black"
                  strokeWidth="1.3"
                />
              </svg>
            )}
          </>
        ) : (
          <>
            {checkedIcon ?? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.66669 0.0418298C2.56009 0.04183 0.0416868 2.56023 0.0416868 5.66683L0.0416868 12.3335C0.0416868 15.4401 2.56009 17.9585 5.66669 17.9585L12.3334 17.9585C15.44 17.9585 17.9584 15.4401 17.9584 12.3335L17.9584 5.66683C17.9584 2.56023 15.44 0.0418294 12.3334 0.0418295L5.66669 0.0418298ZM12.7753 7.35876C13.0194 7.11468 13.0194 6.71895 12.7753 6.47487C12.5312 6.2308 12.1355 6.2308 11.8914 6.47487L8.03622 10.3301C7.95486 10.4114 7.82295 10.4114 7.74159 10.3301L6.10863 8.6971C5.86455 8.45302 5.46882 8.45302 5.22474 8.6971C4.98067 8.94117 4.98067 9.3369 5.22474 9.58098L6.85771 11.2139C7.42722 11.7835 8.35059 11.7835 8.92011 11.2139L12.7753 7.35876Z"
                  fill="black"
                />
              </svg>
            )}
          </>
        )}
      </span>
      <p className="select-none text-black font-Open-Sans text-[14px] font-[400] leading-[140%] -tracking-[0.28px] capitalize">
        {value}
      </p>
    </label>
  );
};

export default function Checkbox({
  children,
  className,
  onChange,
  renderItem,
  checkedIcon,
  uncheckedIcon,
  single,
  defaultValue = '',
}: PropsWithChildren<CheckboxProps>) {
  const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    setValues(single ? [defaultValue] : defaultValue.split(','));
  }, [defaultValue]);

  return (
    <div className={className}>
      {Children.map(children, (child, index) =>
        cloneElement(child as ReactElement, {
          itemIndex: index,
          totalItem: Children.count(children),
          renderItem,
          checkedIcon,
          uncheckedIcon,
          values,
          onChange: (value: string, isChecked: boolean) => {
            setValues((values) => {
              if (single) {
                onChange?.(value);
                return [value];
              }
              const temp = new Set([...values]);
              if (isChecked) temp.add(value);
              else temp.delete(value);
              const returnValue = [...temp.values()];
              onChange?.(returnValue.join(','));
              return returnValue;
            });
          },
        }),
      )}
    </div>
  );
}

Checkbox.Item = CheckboxItem;