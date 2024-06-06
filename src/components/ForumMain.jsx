import ForumPostProvider from "../context/ForumPostContext";
import ForumPost from "./ForumPost";
const list = [{ id: "1" }, { id: "2" }];

const ForumMain = () => {
  return (
    <div className="w-full space-y-10 py-10">
      {list.map((item) => (
        <div
          key={item.id}
          className="w-full border-b-[3.5px] border-neutral-500 border-opacity-10 pb-5"
        >
          <ForumPostProvider>
            <ForumPost />
          </ForumPostProvider>
        </div>
      ))}
    </div>
  );
};

export default ForumMain;
