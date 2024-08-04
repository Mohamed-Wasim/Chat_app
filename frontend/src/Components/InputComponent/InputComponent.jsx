import React from "react";
import "./InputComponent.css";

const InputComponent = (props) => {
  const {
    labeName,
    inputType,
    placeHolder,
    InputValue,
    InputName,
    clsName,
    InputHandleChange,
    isValid,
    ErrorMsg,
  } = props;
  return (
    <div>
      <label className="Label">{labeName}</label>
      <br />
      <input
        className={isValid === false ? `Error` : `Input`}
        type={inputType}
        placeholder={placeHolder}
        name={InputName}
        value={InputValue}
        onChange={InputHandleChange}
      />

      {isValid === false ? (
        <p className={`ErrorMessage ${clsName}`}>{ErrorMsg}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputComponent;
