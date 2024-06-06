import ForumPost from "./ForumPost";
import SearchBar from "./SearchBar";

const SinglePost = () => {
  return (
    <>
      <SearchBar />
      <div className="w-full space-y-10 py-12">
        <ForumPost />
      </div>
    </>
  );
};

export default SinglePost;
