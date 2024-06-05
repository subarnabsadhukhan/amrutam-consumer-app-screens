import { ReactSVG } from "react-svg";
import PostHeader from "./PostHeader";

const Replies = () => {
  return (
    <div className="mt-1 flex flex-col items-end gap-4 border-b-2 border-[#ededed] pb-6">
      <div className="flex w-full items-center gap-[15.2px] font-poppins text-base font-semibold leading-[19.77px] text-[#8D8D8D]">
        <div>Replies</div>
        <ReactSVG className="h-[4px] w-[4px]" src="/dot.svg" />
        <div className="text-[#3A643B]">1 reply</div>
      </div>
      <div className="flex w-11/12 flex-col gap-[18px] rounded-lg bg-[#f3faf1] px-[22px] py-[16px]">
        <PostHeader
          name="Dr. Mathew Adams"
          avatar="/person4.png"
          date="5 days ago"
        />
        <div className="w-11/12 text-justify font-poppins text-base tracking-[0.01em] text-black sm:text-[18px] sm:leading-[28px]">
          <span className="font-semibold">{`Ans. `}</span>
          <span>
            Ayurveda offers holistic approaches like herbal remedies, lifestyle
            adjustments, and relaxation techniques to alleviate stress and
            support mental well-being. It emphasizes personalized care and
            natural methods to address the root causes of mental health
            challenges, promoting balance and harmony in mind and body.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Replies;
