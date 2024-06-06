import { createContext, useState } from "react";

export const ForumPostContext = createContext();

const ForumPostProvider = ({ children }) => {
  const [isShowAddReply, setIsShowAddReply] = useState(false);
 
  return (
    <ForumPostContext.Provider
      value={{
        isShowAddReply,
        setIsShowAddReply,
      }}
    >
      {children}
    </ForumPostContext.Provider>
  );
};

export default ForumPostProvider;
