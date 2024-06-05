const user = {
  name: "Priya Singh",
  avatar: "/person1.png",
};

const Askbar = () => {
  return (
    <div className="w-full border-b-4 border-neutral-500 border-opacity-10">
      <div className="my-8 flex items-center justify-center md:my-[48px]">
        <div className="flex w-11/12 flex-col items-center justify-center gap-4 md:flex-row md:gap-[35.8px] lg:w-fit">
          {/* User Avatar & Name */}
          <div className="flex items-center gap-[18px]">
            <img
              src={user.avatar}
              alt="avatar"
              className="size-10 rounded-full md:size-[52.2px]"
            />
            <span className="whitespace-nowrap font-poppins text-base font-semibold leading-[19.77px] text-[#3a643b] md:text-[18.99px]">
              {user.name}
            </span>
          </div>
          <div className="flex w-full flex-1 gap-[17px] md:w-fit">
            <input
              className="box-border h-[39px] w-full flex-1 rounded-[11px] border-[1px] border-solid border-[#E0E0E0] px-4 font-poppins text-[15.2px] leading-[19.77px] text-gray-600 placeholder:text-[#7B7B7B] focus:outline-none focus:ring-0 lg:w-[663px]"
              placeholder="Ask your question here"
            />
            <button className="h-[39px] rounded-[8px] bg-[#3a643b] px-5 text-center font-poppins text-[14px] font-medium tracking-[-0.01em] text-white sm:w-[116px]">
              Ask
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Askbar;
