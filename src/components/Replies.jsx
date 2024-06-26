import PostHeader from "./PostHeader";
import DotSvg from "../assets/dot.svg?react";
import DocumentSvg from "../assets/document.svg?react";
import DownloadSvg from "../assets/download.svg?react";
import { Link, useParams } from "react-router-dom";
import AddReply from "./AddReply";
import useForumPost from "../hooks/useForumPost";
import ReactPlayer from "react-player";
import PopOverMenu from "./PopOverMenu";
import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

const replies = [
  {
    id: 1,
    name: "Dr. Mathew Adams",
    avatar: "/person4.png",
    date: "5 days ago",
    reply:
      "Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
  },
  {
    id: 2,
    name: "Dr. Sophia Johnson",
    avatar: "/person4.png",
    date: "3 days ago",
    reply:
      "Integrating mindfulness and meditation practices into daily routines can significantly enhance mental clarity and emotional stability. These techniques help individuals to manage stress more effectively and foster a sense of inner peace and resilience. Moreover, regular practice of mindfulness can lead to lasting changes in the brain, improving overall mental health and well-being. It's important to find a routine that works for you and stick with it, as consistency is key to reaping the full benefits.",
    images: ["/hair-care-1.jpg", "/product1.png"],
  },
  {
    id: 3,
    name: "Dr. Richard Lee",
    avatar: "/person3.png",
    date: "2 days ago",
    reply:
      "Nutritional therapy can play a crucial role in mental health by ensuring the brain receives essential nutrients. A balanced diet rich in omega-3 fatty acids, vitamins, and minerals supports cognitive function and emotional well-being. It's not just about what you eat, but also when you eat and how your body processes these nutrients. Working with a nutritionist can help tailor a diet plan that supports your specific mental health needs, enhancing both your physical and psychological health.",
    videos: [
      "https://media.istockphoto.com/id/477954773/video/ayurveda-medicine.mp4?s=mp4-640x640-is&k=20&c=LVpz3FVryfk_OvyElsUwN09R6x3fult_917Lnl-7ZmI=",
    ],
  },
  {
    id: 4,
    name: "Dr. Emily Carter",
    avatar: "/person3.png",
    date: "1 day ago",
    reply:
      "Physical activities like yoga and tai chi not only improve physical health but also enhance mental wellness. These practices promote relaxation, reduce anxiety, and increase mindfulness, contributing to overall psychological balance. Engaging in regular physical activity can also improve your mood and energy levels, providing a natural way to combat depression and anxiety. Additionally, the social aspect of group classes can help build a support network, further boosting mental health.",
    images: ["/hair-care-3.jpg", "/product1.png"],
    videos: [
      "https://media.istockphoto.com/id/1291606612/video/turmeric-powder-and-roots-curcuma-longa-kurkuma-panning-turmeric-on-black-background-top-view.mp4?s=mp4-640x640-is&k=20&c=HgbZ1PBRLxNE0lOfedAgvJapZPYleeePbMCN-pMRcpo=",
      "https://media.istockphoto.com/id/1464894422/video/woman-hand-powdering-indian-spices-turmeric-powder-stone-mortar-kerala-india.mp4?s=mp4-640x640-is&k=20&c=t5qdQRiyBleC2JD6Yhu8RJWvS6AewAh6s0ebgm6OZlU=",
    ],
    pdfs: ["/sample-pdf-1.pdf"],
  },
  {
    id: 5,
    name: "Dr. Daniel Thompson",
    avatar: "/person3.png",
    date: "4 hours ago",
    reply:
      "Adequate sleep is fundamental for mental health. Establishing a regular sleep schedule and creating a restful environment can improve sleep quality, which is essential for cognitive function, emotional regulation, and stress management. Sleep hygiene practices, such as reducing screen time before bed, maintaining a cool and quiet bedroom, and avoiding caffeine late in the day, can make a significant difference. Good sleep habits not only improve mental health but also overall physical health, making it a cornerstone of well-being.",
    pdfs: ["/sample-pdf-1.pdf", "/sample-pdf-2.pdf"],
  },
];

const Replies = () => {
  const { id } = useParams();
  const { isShowAddReply } = useForumPost();

  return (
    <div className="mt-1 flex flex-col items-end gap-4 border-b-2 border-[#ededed] pb-6">
      <div className="flex w-full items-center gap-[15.2px] font-poppins text-base font-semibold leading-[19.77px] text-[#8D8D8D]">
        <div>Replies</div>
        <DotSvg className="size-[4px]" src="/dot.svg" />
        <div className="text-[#3A643B]">{`${replies.length} reply`}</div>
      </div>
      {replies.map((reply, i) => {
        if (!id && i > 2) return null;
        return <Reply key={reply.id} reply={reply} />;
      })}
      {replies.length > 3 && !id && (
        <Link
          to={"post/123"}
          className="w-full text-center font-poppins text-[16px] font-semibold leading-[19.77px] text-[#3a643b]"
        >
          View All Replies
        </Link>
      )}
      {isShowAddReply && <AddReply />}
    </div>
  );
};

export default Replies;

const Reply = ({ reply }) => {
  return (
    <div className="relative w-11/12">
      <Popover className="absolute">
        <PopoverButton className="flex size-[30px] -translate-x-[120%] translate-y-1 items-center justify-center rounded-[50%] bg-[#FCDDB8] font-poppins text-[19.93px] leading-[31px] text-[#F9B25E] focus:outline-none sm:-translate-x-[150%]">
          <span>!</span>
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
            anchor={{ to: "right start", gap: 1 }}
            className="mx-3 rounded-xl bg-white font-poppins text-sm/6 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="relative rounded-b-lg rounded-tl-none rounded-tr-lg bg-[#FCDDB8] px-[15px] py-[21px] shadow-[0px_0px_6px_rgba(0,_0,_0,_0.25)] md:w-full">
              <div className="relative inline-block text-left font-poppins text-[16px] font-medium text-[#B26B17] md:w-[566px]">
                {`Thank you for your contribution! Your answer is currently under review. It will be posted once it has been verified by our admin team. `}
              </div>
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
      <div className="flex w-full flex-col gap-[18px] rounded-lg bg-[#f3faf1] px-[22px] py-[16px]">
        <PostHeader
          name={reply.name}
          avatar={reply.avatar}
          place="reply"
          date={reply.date}
        />
        <div className="w-11/12 text-justify font-poppins text-base tracking-[0.01em] text-black sm:text-[18px] sm:leading-[28px]">
          <span className="font-semibold">{`Ans. `}</span>
          <span>{reply.reply}</span>
        </div>
        {reply.images?.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {reply.images.map((image) => (
              <img
                key={image}
                className="size-[250px] rounded-xl object-cover"
                alt="Post Image"
                src={image}
              />
            ))}
          </div>
        )}
        {reply.videos?.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {reply.videos.map((video) => (
              <div className="overflow-hidden rounded-xl" key={video}>
                <ReactPlayer
                  width={"320px"}
                  height={"180px"}
                  controls={true}
                  url={video}
                  // light={<img src="/product1.png" alt="Video Thumbnail" />}
                />
              </div>
            ))}
          </div>
        )}

        {reply.pdfs?.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {reply.pdfs.map((pdf) => (
              <div
                className="flex w-full gap-4 rounded-lg border-[1.8px] border-solid border-neutral-300 px-[17px] py-[16px] sm:gap-[22px] md:w-[432px]"
                key={pdf}
              >
                <div className="box-border rounded-lg bg-[#3a643b] px-[21px] py-[18px]">
                  <DocumentSvg className="fill-neutral-300" />
                </div>
                <div className="flex w-full flex-col overflow-hidden">
                  <div className="overflow-hidden overflow-ellipsis whitespace-nowrap font-poppins text-lg font-medium tracking-[-0.01em] text-black sm:text-[20px]">
                    {pdf.slice(1).replace(/-/g, " ").replace(".pdf", "")}
                  </div>
                  <div className="flex gap-3 font-poppins text-[16px] font-medium tracking-[-0.01em] text-[#8D8D8D]">
                    <span>1.2 MB</span>
                    <span className="uppercase">pdf</span>
                  </div>
                </div>
                <PopOverMenu
                  render={() => (
                    <CloseButton
                      onClick={() => {
                        window.open(pdf, "_blank");
                      }}
                      className="flex w-full cursor-pointer items-center justify-start gap-[21px] border-b-[1.5px] border-solid border-[#EDEDED] px-[20px] pb-[11px] pt-[10px] text-base"
                    >
                      <DownloadSvg className="h-[21px] cursor-pointer" />
                      <span className="cursor-pointer select-none">
                        Download
                      </span>
                    </CloseButton>
                  )}
                  dotClassNames={"size-5 fill-[#8D8D8D]"}
                  panelWidth="150px"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
