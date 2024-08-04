import React from "react";
import "./ButtonComponent.css";

const ButtonComponent = (props) => {
  const { name, onClickingHandler, clsName } = props;
  return (
    <>
      <button
        className={`ButtonComponent ${clsName}`}
        onClick={onClickingHandler}
      >
        {name}
      </button>
    </>
  );
};

export default ButtonComponent;
