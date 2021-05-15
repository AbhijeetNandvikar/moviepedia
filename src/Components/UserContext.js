import React, { createContext } from "react";
export const globalData = createContext({});

const UserContext = (props) => {
  const [currentPage, setCurrentPage] = React.useState("tvShows");
  return (
    <globalData.Provider value={{ currentPage, setCurrentPage }}>
      {props.children}
    </globalData.Provider>
  );
};

export default UserContext;
