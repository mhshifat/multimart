"use client";
import { useTheme } from "@/hooks";
import { cn } from "@/lib/utils";

const ACTION_BUTTONS = [
  {
    type: "wishlist",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={31}
        height={28}
        viewBox="0 0 31 28"
        fill="none"
        className="h-[22px] w-[22px]"
      >
        <path
          d="M15.7127 26.2497L3.7005 13.7214C2.64478 12.6665 1.94798 11.306 1.70894 9.83283C1.4699 8.35967 1.70074 6.84864 2.36873 5.51405V5.51405C2.87244 4.50692 3.60825 3.63389 4.51552 2.96689C5.4228 2.29989 6.47558 1.85802 7.58711 1.67768C8.69865 1.49733 9.83713 1.58369 10.9088 1.92962C11.9804 2.27555 12.9545 2.87116 13.7508 3.66737L15.7127 5.62806L17.6746 3.66737C18.4709 2.87116 19.445 2.27555 20.5166 1.92962C21.5883 1.58369 22.7267 1.49733 23.8383 1.67768C24.9498 1.85802 26.0026 2.29989 26.9099 2.96689C27.8171 3.63389 28.5529 4.50692 29.0567 5.51405C29.7237 6.84812 29.9542 8.35825 29.7154 9.83057C29.4766 11.3029 28.7807 12.6628 27.7261 13.7176L15.7127 26.2497Z"
          stroke="black"
          strokeWidth="1.70161"
          strokeLinecap="square"
          className="stroke-foreground"
        />
      </svg>
    ),
  },
  {
    type: "atc",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        viewBox="0 0 28 28"
        fill="none"
        className="h-[22px] w-[22px]"
      >
        <path
          d="M20.4622 7.2002C20.4622 6.41226 20.2898 5.63205 19.9548 4.90409C19.6197 4.17614 19.1287 3.51471 18.5096 2.95755C17.8906 2.4004 17.1556 1.95845 16.3468 1.65692C15.538 1.35539 14.6711 1.2002 13.7956 1.2002C12.9201 1.2002 12.0532 1.35539 11.2443 1.65692C10.4355 1.95845 9.70058 2.4004 9.08153 2.95755C8.46247 3.51471 7.97141 4.17614 7.63638 4.9041C7.30134 5.63205 7.12891 6.41226 7.12891 7.2002"
          stroke="black"
          className="stroke-foreground"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M22.3543 8.09961H5.24433C2.79016 8.09961 0.914723 10.2892 1.29183 12.7143L2.98668 23.613C3.28967 25.5614 4.96735 26.9984 6.93917 26.9984H20.6594C22.6312 26.9984 24.3089 25.5614 24.6119 23.613L26.3068 12.7143C26.6839 10.2892 24.8084 8.09961 22.3543 8.09961Z"
          stroke="black"
          className="stroke-foreground"
          strokeWidth="1.7"
        />
        <path
          d="M13.7969 14.7476L13.7969 21.3539"
          stroke="black"
          className="stroke-foreground"
          strokeLinecap="round"
        />
        <path
          d="M17.1016 18.0508L10.4952 18.0508"
          stroke="black"
          className="stroke-foreground"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  }
]

export default function ProductActions() {
  return (
    <span className="absolute right-[10px] top-[10px] flex flex-col gap-[18px] md:right-[22px] md:top-[22px]">
      {ACTION_BUTTONS.map((item) => (
        <button key={item.type} className={cn("bg-background text-foreground flex h-[45px] w-[45px] items-center justify-center rounded-full")}>
          {item.icon}
        </button>
      ))}
    </span>
  )
}