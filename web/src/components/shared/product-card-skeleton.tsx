export default function ProductCardSkeleton() {
    return (
      <div className="h-auto w-full">
        <div className="skeleton mb-4 h-[239px] w-[200px] rounded-lg object-cover lg:h-[286px] lg:w-[250px] xl:h-[286px] xl:w-[250px] 2xl:h-[406px] 2xl:w-[340px]">
          <div className="absolute right-[22px] top-[22px] z-50 grid gap-[9.71px] md:gap-[8px] lg:gap-[11px] xl:gap-[13px] 2xl:gap-[18.8px]">
            <button className="skeleton h-[45px] w-[45px] rounded-full bg-white/60"></button>
            <button className="skeleton h-[45px] w-[45px] rounded-full bg-white/60"></button>
          </div>
        </div>
  
        <div className="mb-[28px] mt-[18px]">
          <button className="skeleton mr-2 h-[30px] w-[30px] cursor-pointer justify-center rounded border	 border-gray-200 md:h-[21px] md:w-[28px] lg:h-[28px]					 lg:w-[28px] xl:h-[34px] xl:w-[34px] 2xl:h-[51px] 2xl:w-[51px]"></button>
          <button className="skeleton mr-2 h-[30px] w-[30px] cursor-pointer justify-center rounded border	 border-gray-200 md:h-[21px] md:w-[28px] lg:h-[28px]					 lg:w-[28px] xl:h-[34px] xl:w-[34px] 2xl:h-[51px] 2xl:w-[51px]"></button>
        </div>
  
        <div className="flex flex-col gap-[18px]">
          <h3 className="font-Mulish skeleton h-5 w-2/4 truncate rounded-lg text-left text-base font-semibold uppercase not-italic leading-5 text-black no-underline 2xl:text-[24px] 2xl:leading-[28.8px]"></h3>
          <h6 className="font-Open-Sans skeleton h-[18px] w-1/4 truncate rounded-lg text-[13px] font-light uppercase not-italic leading-[120%] text-black no-underline 2xl:text-[20px]"></h6>
          <p className="font-Mulish skeleton h-5 w-1/3 rounded-lg text-right text-base font-semibold not-italic leading-5 2xl:text-[24px] 2xl:leading-[28.8px]"></p>
        </div>
      </div>
    )
}