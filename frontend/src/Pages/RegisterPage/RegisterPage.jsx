import React from "react";
import "./RegisterPage.css";
import InputComponent from "../../Components/InputComponent/InputComponent";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="signUpContainer">
      <h1>Sign up</h1>
      <form>
        <InputComponent
          clsName="signUpInput"
          labeName="full name"
          inputType="text"
          placeHolder="Enter the full name"
          // InputName={fullName}
        />
        <InputComponent
          clsName="signUpInput"
          labeName="User name"
          inputType="text"
          placeHolder="Enter the user name"
          // InputName={UserName}
        />
        <InputComponent
          clsName="signUpInput"
          labeName="Password"
          inputType="password"
          placeHolder="Enter the user password"
          // InputName={password}
        />
        <InputComponent
          clsName="signUpInput"
          labeName="Re-password"
          inputType="password"
          placeHolder="Enter the user re-password"
          // InputName={re-password}
        />
        <InputComponent
          clsName="signUpInput"
          labeName="Gender"
          inputType="password"
          placeHolder="Enter the user re-password"
          // InputName={re-password}
        />
        <ButtonComponent clsName="signUpButton" name="SIGN UP" />
      </form>
      <p className="signUpLink">
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
