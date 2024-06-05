import PostHeader from "./PostHeader";
import QuestionContent from "./QuestionContent";
import Replies from "./Replies";
import Socials from "./Socials";

const ForumPost = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-4 px-5">
      <PostHeader name="Mathew Adams" avatar="/person2.png" date="5 days ago" />
      <QuestionContent />
      <Replies />
      <Socials />
    </section>
  );
};

export default ForumPost;
