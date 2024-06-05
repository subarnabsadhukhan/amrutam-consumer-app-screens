import DotSvg from "../assets/dot.svg?react";

const DisplayCategories = ({ category: { main, sub } }) => {
  return (
    <div className="flex items-center gap-2.5 sm:gap-[22px]">
      <Category category={main} />
      <DotSvg className="h-[5px] w-[5px] fill-[#3A643B]" src="/dot.svg" />
      <Category category={sub} />
    </div>
  );
};

export default DisplayCategories;

const Category = ({ category }) => {
  return (
    <span className="rounded bg-[#F3FAF1] px-3 py-2 font-poppins text-sm font-medium leading-[19.77px] text-[#3A643B] sm:text-[16px]">
      {category}
    </span>
  );
};
