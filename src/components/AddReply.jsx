import useForumPost from "../hooks/useForumPost";

const AddReply = () => {
  const { setIsShowAddReply } = useForumPost();
  return (
    <div className="mt-5 flex w-11/12 gap-5 sm:gap-[41px]">
      <img src="/person2.png" className="size-[52px] rounded-full" />
      <div className="flex flex-1 flex-col gap-3">
        <textarea
          rows={6}
          className="box-border w-full rounded-[11px] border-[1px] border-solid border-[#E0E0E0] px-[14px] py-6 font-poppins text-[15.2px] leading-[19.77px] text-gray-600 placeholder:text-[#7B7B7B] focus:outline-none"
          placeholder="Write your answer"
        />
        <input
          disabled
          className="h-[49px] w-full rounded-[11px] border-[1px] border-solid border-[#E0E0E0] px-[14px] font-poppins text-[15.2px] leading-[19.77px] placeholder:text-[#7B7B7B] focus:outline-none disabled:bg-white"
          placeholder="Add attachments"
        />
        <div className="mt-1.5 flex gap-5 self-end">
          <button
            onClick={() => setIsShowAddReply(false)}
            className="rounded-lg border border-solid border-[#3a643b] px-4 py-2.5 text-center font-poppins text-[14px] font-medium tracking-[-0.01em] text-[#3a643b] sm:w-[116px]"
          >
            Cancel
          </button>
          <button className="rounded-lg bg-[#3a643b] px-4 py-2.5 text-center font-poppins text-[14px] font-medium tracking-[-0.01em] text-white sm:w-[116px]">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReply;
