import HeartSvg from "../assets/heart.svg?react";
import SendSvg from "../assets/send.svg?react";
import MessageSvg from "../assets/message.svg?react";
import DotSvg from "../assets/dot.svg?react";
import HeartSolidSvg from "../assets/heart-solid.svg?react";

const comments = [
  {
    id: 1,
    name: "Akash Kaur",
    avatar: "/person4.png",
    comment:
      "I have recently started Ayurvedic practices and am feeling much better and calmer than before. Going Ayurvedic is one of the best choices I have taken!",
    date: "3 mins ago",
  },
  {
    id: 2,
    name: "Diya Sen",
    avatar: "/person3.png",
    comment:
      "I have recently started Ayurvedic practices and am feeling much better and calmer than before. Going Ayurvedic is one of the best choices I have taken!",
    date: "1 hour ago",
  },
];

const Socials = () => {
  return (
    <div className="mt-1 flex flex-col items-end gap-10">
      <SocialButtonsPanel />
      <AddComment avatar={`/person1.png`} />
      <Comments />
    </div>
  );
};

export default Socials;

const SocialButtonsPanel = () => {
  return (
    <div className="mx-auto flex gap-5 sm:gap-[64.58px]">
      <SocialButton link="heart" label="Favours" number={23} />
      <SocialButton link="comment" label="Comments" number={2} />
      <SocialButton link="send" label="Shares" number={23} />
    </div>
  );
};

const SocialButton = ({ link, label, number }) => {
  return (
    <div className="group flex items-center justify-center gap-[7.8px] font-poppins text-[12.96px] font-medium text-[#8D8D8D] hover:cursor-pointer hover:text-[#3A643B]">
      {link === "heart" && (
        <HeartSvg className="h-[19.2px] group-hover:cursor-pointer group-hover:fill-[#3A643B]" />
      )}
      {link === "send" && (
        <SendSvg className="h-[19.2px] group-hover:cursor-pointer group-hover:fill-[#3A643B]" />
      )}
      {link === "comment" && (
        <MessageSvg className="h-[19.2px] group-hover:cursor-pointer group-hover:fill-[#3A643B]" />
      )}
      <div className="whitespace-nowrap">{`${number} ${label}`}</div>
    </div>
  );
};

const AddComment = ({ avatar }) => {
  return (
    <div className="flex w-11/12 flex-wrap justify-end gap-[11px] pl-1 sm:pl-[22px]">
      <img src={avatar} className="size-[52px] rounded-full" />
      <input
        className="box-border h-[52px] flex-1 rounded-[11px] border-[1px] border-solid border-[#E0E0E0] px-[21px] font-poppins text-sm text-neutral-600 placeholder:text-[12.96px] placeholder:text-[#7B7B7B] focus:outline-none"
        placeholder="Add your comment"
      />
      <button className="box-border rounded-lg bg-[#3a643b] px-5 py-2.5 text-center font-poppins text-[14px] font-medium text-white sm:w-[185px] sm:py-4">
        Add
      </button>
    </div>
  );
};

const Comments = () => {
  return (
    <div className="-mt-4 flex w-11/12 flex-col pl-1">
      {comments.map((comment, i) => (
        <div
          key={comment.id}
          className={`${comments.length > i + 1 ? `border-b-2 border-[#ededed]` : ""} py-8`}
        >
          <Comment
            name={comment.name}
            avatar={comment.avatar}
            comment={comment.comment}
            date={comment.date}
          />
        </div>
      ))}
    </div>
  );
};

const Comment = ({ name, avatar, date, comment }) => {
  return (
    <div className="flex gap-[15px]">
      <img src={avatar} className="size-[52px] rounded-full" />
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-[16px]">
            <span className="font-poppins text-[18px] font-semibold leading-[19.77px] text-[#3a643b]">
              {name}
            </span>
            <DotSvg className="hidden size-[4px] sm:block" />
            <span className="font-poppins text-[14px] font-medium leading-[19.77px] text-[#8D8D8D]">
              {date}
            </span>
          </div>
          <div className="group flex items-center gap-[5px]">
            <HeartSvg className="h-[19.2px] group-hover:fill-[#3a643b]" />
            <span className="font-poppins text-[12.96px] font-medium text-[#8D8D8D] group-hover:text-[#3a643b]">
              2
            </span>
          </div>
        </div>
        <div className="text-justify font-poppins text-[18px] leading-[28px] text-black">
          {comment}
        </div>
      </div>
    </div>
  );
};
