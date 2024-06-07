import ShareSvg from "../assets/share.svg?react";
import ReportSvg from "../assets/report.svg?react";
import WriteSvg from "../assets/write.svg?react";
import SettingSvg from "../assets/setting.svg?react";
import VerticalTripleDotSvg from "../assets/vertical-triple-dot.svg?react";
import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import useForumPost from "../hooks/useForumPost";

const PostHeader = ({ name, avatar, date, place = "question" }) => {
  const { setIsShowAddReply } = useForumPost();
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

      <Popover>
        <PopoverButton className="flex w-3 justify-center focus:outline-none data-[active]:text-black data-[hover]:text-black data-[focus]:outline-1 data-[focus]:outline-black">
          <VerticalTripleDotSvg />
        </PopoverButton>
        <Transition
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel
            modal="true"
            anchor="left start"
            className="rounded-xl bg-white font-poppins text-sm/6 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="flex w-[216px] flex-col font-poppins text-[18px] leading-[21.88px] tracking-[-0.01em] text-[#1E1E1E]">
              <CloseButton className="flex w-full cursor-pointer items-center justify-start gap-[21px] border-b-[1.5px] border-solid border-[#EDEDED] px-[30px] pb-[18px] pt-[15px] hover:bg-neutral-100">
                <ShareSvg className="h-[21px] cursor-pointer" />
                <span className="cursor-pointer select-none">Share</span>
              </CloseButton>
              {place === "question" && (
                <CloseButton
                  onClick={() => setIsShowAddReply(true)}
                  className="flex w-full cursor-pointer items-center justify-start gap-[21px] border-b-[1.5px] border-solid border-[#EDEDED] px-[30px] pb-[18px] pt-[15px] hover:bg-neutral-100"
                >
                  <WriteSvg className="h-[21px] cursor-pointer" />
                  <span className="cursor-pointer select-none">Add Answer</span>
                </CloseButton>
              )}
              {place === "reply" && (
                <CloseButton className="flex w-full cursor-pointer items-center justify-start gap-[21px] border-b-[1.5px] border-solid border-[#EDEDED] px-[30px] pb-[18px] pt-[15px] hover:bg-neutral-100">
                  <SettingSvg className="h-[21px] cursor-pointer" />
                  <span className="cursor-pointer select-none">Send tips</span>
                </CloseButton>
              )}
              <CloseButton className="flex w-full cursor-pointer items-center justify-start gap-[21px] border-b-[1.5px] border-solid border-[#EDEDED] px-[30px] pb-[18px] pt-[15px] hover:bg-neutral-100">
                <ReportSvg className="h-[21px] cursor-pointer" />
                <span className="cursor-pointer select-none">Report</span>
              </CloseButton>
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  );
};

export default PostHeader;
