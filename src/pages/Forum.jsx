import { Fragment } from "react";
import SearchBar from "../components/SearchBar";
import Askbar from "../components/Askbar";
import ForumMain from "../components/ForumMain";

const Forum = () => {
  return (
    <Fragment>
      <SearchBar />
      <Askbar />
      <ForumMain />
    </Fragment>
  );
};

export default Forum;
