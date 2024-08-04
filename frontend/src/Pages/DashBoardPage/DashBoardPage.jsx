import React from "react";
import "./DashBoardPage.css";
import LeftSideComponent from "../../Components/LeftSideComponent/LeftSideComponent";
import RightSideComponent from "../../Components/RightSideComponent/RightSideComponent";

const DashBoardPage = () => {
  return (
    <div className="dashBoardContainer">
      <LeftSideComponent />
      <RightSideComponent />
    </div>
  );
};

export default DashBoardPage;
