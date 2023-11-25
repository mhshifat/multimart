import { Checkbox } from '@/components/ui';
import { useTheme } from '@/hooks';
import {useMemo} from 'react';

export const SORT_ITEMS: Record<string, string> = {
  "Best Selling": "BEST_SELLING",
  "Alphabetically, Z-A": "TITLE:DESC",
  "Alphabetically, A-Z": "TITLE:ASC",
  "Price, Low to High": "PRICE:ASC",
  "Price, High to Low": "PRICE:DESC",
  "Date, Old to new": "CREATED:ASC",
  "Date, new to Old": "CREATED:DESC",
}

export default function SortFilterPopup({onChange}: {onChange: (value: string)  => void}) {
  const comParams = new URLSearchParams(window.location.search).get('sort');
  const sortedItems: Record<string, string> = useMemo(
    () =>
      Object.values(SORT_ITEMS).reduce((acc, val) => {
        acc[val] = Object.entries(SORT_ITEMS).find(
          (item) => item[1] === val,
        )![0];
        return acc;
      }, {} as Record<string, string>),
    [SORT_ITEMS],
  );

  return (
    <div
      className="flex flex-col p-[20px] pt-[22px] bg-[#FFF] rounded-lg border border-[#F5F5F5] w-[282px] shadow-md"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Checkbox
        defaultValue={sortedItems[decodeURIComponent(comParams!)]}
        checkedIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4.45781 2.02031C3.38906 2.19844 2.41875 3.08906 2.07656 4.19531C1.99688 4.4625 1.99219 4.82812 1.99219 12C1.99219 19.1719 1.99688 19.5375 2.07656 19.8047C2.38594 20.8078 3.19219 21.6141 4.19531 21.9234C4.4625 22.0031 4.82812 22.0078 12 22.0078C19.1719 22.0078 19.5375 22.0031 19.8047 21.9234C20.8078 21.6141 21.6141 20.8078 21.9234 19.8047C22.0031 19.5375 22.0078 19.1719 22.0078 12C22.0078 4.82812 22.0031 4.4625 21.9234 4.19531C21.6141 3.19687 20.8547 2.42812 19.8281 2.08125C19.5797 1.99687 19.2516 1.99219 12.1406 1.9875C7.90313 1.98281 4.60313 1.99687 4.45781 2.02031ZM16.1484 8.62031C16.7016 8.86875 16.8844 9.52969 16.5469 10.0359C16.4719 10.1484 15.2766 11.3766 13.8891 12.7594C11.9766 14.6672 11.3156 15.3 11.1562 15.3703C10.9031 15.4875 10.6078 15.4969 10.3688 15.3984C10.0969 15.2812 7.52344 12.7031 7.37813 12.3984C7.2375 12.1031 7.2375 11.8969 7.37813 11.6016C7.50469 11.325 7.59375 11.2406 7.875 11.1141C8.41406 10.8703 8.63438 10.9922 9.82031 12.1828L10.7578 13.125L12.9844 10.8984C14.3906 9.49687 15.2719 8.64844 15.375 8.60625C15.6 8.50781 15.9234 8.51719 16.1484 8.62031Z"
              fill="black"
            />
          </svg>
        }
        uncheckedIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <g opacity="0.1">
              <path
                d="M4.45781 2.02031C3.38906 2.19844 2.41875 3.08906 2.07656 4.19531C1.99688 4.4625 1.99219 4.82812 1.99219 12C1.99219 19.1719 1.99688 19.5375 2.07656 19.8047C2.38594 20.8078 3.19219 21.6141 4.19531 21.9234C4.4625 22.0031 4.82812 22.0078 12 22.0078C19.1719 22.0078 19.5375 22.0031 19.8047 21.9234C20.8078 21.6141 21.6141 20.8078 21.9234 19.8047C22.0031 19.5375 22.0078 19.1719 22.0078 12C22.0078 4.82812 22.0031 4.4625 21.9234 4.19531C21.6141 3.19687 20.8547 2.42812 19.8281 2.08125C19.5797 1.99687 19.2516 1.99219 12.1406 1.9875C7.90313 1.98281 4.60313 1.99687 4.45781 2.02031ZM16.1484 8.62031C16.7016 8.86875 16.8844 9.52969 16.5469 10.0359C16.4719 10.1484 15.2766 11.3766 13.8891 12.7594C11.9766 14.6672 11.3156 15.3 11.1562 15.3703C10.9031 15.4875 10.6078 15.4969 10.3688 15.3984C10.0969 15.2812 7.52344 12.7031 7.37813 12.3984C7.2375 12.1031 7.2375 11.8969 7.37813 11.6016C7.50469 11.325 7.59375 11.2406 7.875 11.1141C8.41406 10.8703 8.63438 10.9922 9.82031 12.1828L10.7578 13.125L12.9844 10.8984C14.3906 9.49687 15.2719 8.64844 15.375 8.60625C15.6 8.50781 15.9234 8.51719 16.1484 8.62031Z"
                fill="black"
              />
            </g>
          </svg>
        }
        renderItem={({icon, itemIndex, value, totalItem, checked}) => (
          <>
            {itemIndex !== 0 && (
              <div
                className="h-[1px]"
                style={{
                  background: `linear-gradient(90deg, rgba(189, 189, 189, 0.00) 1.04%, #BFBFBF 51.84%, rgba(169, 169, 169, 0.00) 100%)`,
                }}
              />
            )}
            <div
              className={`w-full flex items-center gap-[8px] ${
                itemIndex === 0
                  ? 'pb-[15px]'
                  : itemIndex === totalItem! - 1
                  ? 'pt-[15px]'
                  : 'py-[15px]'
              }`}
            >
              {icon}

              <p
                className={`text-black font-Mulish text-[14px] ${
                  checked ? 'font-[700]' : 'font-[500]'
                } leading-[120%] -tracking-[0.28px] uppercase`}
              >
                {value}
              </p>
            </div>
          </>
        )}
        onChange={(value) => onChange?.(SORT_ITEMS[value])}
      >
        {Object.keys(SORT_ITEMS).map((item) => (
          <Checkbox.Item key={item} value={item} />
        ))}
      </Checkbox>
    </div>
  );
}