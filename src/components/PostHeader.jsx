const PostHeader = ({ name, avatar, date }) => {
  return (
    <div className="flex items-center justify-between pr-2 md:pr-5">
      <div className="flex items-center gap-4">
        <img src={avatar} className="size-[52px] rounded-full" />
        <div className="flex flex-col gap-1">
          <span className="font-poppins text-[18px] leading-[19.77px] text-[#1E1E1E]">
            {name}
          </span>
          <span className="font-poppins text-[14px] font-semibold leading-[19.77px] text-[#8D8D8D]">
            {date}
          </span>
        </div>
      </div>
      <img src="/vertical-triple-dot.svg" />
    </div>
  );
};

export default PostHeader;
