import React from "react";
import "./LeftSideComponent.css";
import { Link } from "react-router-dom";
import InputComponent from "../InputComponent/InputComponent";

const LeftSideComponent = () => {
  const handleUserClick = () => {
    alert("Hello user");
  };
  return (
    <div className="LeftSideComponent">
      <div className="leftSideBody">
        <h2>Chat app</h2>
        <InputComponent
          clsName="leftSideSearch"
          type="search"
          placeHolder="search"
        />
        <div className="LeftSideContainer" onClick={handleUserClick}>
          <div className="leftSideImg"></div>
          <div>
            <p>Mohamed Wasim</p>
          </div>
        </div>
        <div className="LeftSideContainer" onClick={handleUserClick}>
          <div className="leftSideImg"></div>
          <div>
            <p>Mohamed Wasim</p>
          </div>
        </div>
      </div>
      <footer className="leftSideFooter">
        <p>
          <Link to="login">LOG OUT</Link>
        </p>
      </footer>
    </div>
  );
};

export default LeftSideComponent;
