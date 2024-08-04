import React from "react";
import "./RightSideComponent.css";
import InputComponent from "../InputComponent/InputComponent";

const RightSideComponent = () => {
  return (
    <div className="rightSideContainer">
      <header className="rightSideHeader">
        <div className="headerContentContainer">
          <div className="headerImgContainer">
            <img />
          </div>
          <div>
            <p className="headerName">Mohamed Wasim</p>
          </div>
        </div>
      </header>
      {false ? (
        <div className="rightSideChatConversation1">
          <p>Chat app</p>
        </div>
      ) : (
        <div className="rightSideChatConversation2">
          <p className="rightSideReceivedText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            pariatur.
          </p>
          <p className="rightSideSendText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            pariatur.
          </p>
        </div>
      )}
      <div>
        <InputComponent
          clsName="rightSideSendMessage"
          placeHolder="Type a message"
        />
      </div>
    </div>
  );
};

export default RightSideComponent;
