import React, { useState } from "react";
import InputComponent from "../../Components/InputComponent/InputComponent";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { sendData } from "../../HttpConnection/HttpConnection";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    usrNm: "",
    pswd: "",
  });
  const [isValid, setIsValid] = useState({
    userName: true,
    userPassword: true,
  });

  console.log(userLogin);

  // Login Change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    if (userLogin.usrNm !== "" && userLogin.pswd !== "") {
      setIsValid((prevState) => ({
        ...prevState,
        usrNm: userLogin.usrNm !== "",
        pswd: userLogin.pswd !== "",
      }));
      console.log(userLogin);
      await sendData("/api/user/login", userLogin);
      // navigate("/");
    } else {
      setIsValid((prevState) => ({
        ...prevState,
        userName: userLogin.usrNm !== "",
        userPassword: userLogin.pswd !== "",
      }));
    }
  };

  return (
    <div className="loginContainer">
      <h1 className="loginHeader">Login</h1>
      <form>
        <InputComponent
          clsName="loginInput"
          labeName="User name"
          inputType="text"
          placeHolder="Enter the user name"
          InputValue={userLogin?.usrNm}
          InputName="usrNm"
          InputHandleChange={handleChange}
          isValid={isValid?.userName}
          ErrorMsg="Please enter the user name"
        />
        <InputComponent
          clsName="loginInput"
          labeName="Password"
          inputType="password"
          placeHolder="Enter the password"
          InputValue={userLogin?.pswd}
          InputName="pswd"
          InputHandleChange={handleChange}
          isValid={isValid?.userPassword}
          ErrorMsg="Please enter the user password"
        />
        <p className="ForgotPassword">Forgot password ?</p>
        <ButtonComponent
          clsName="loginButton"
          name="LOGIN"
          onClickingHandler={handleLogin}
        />
      </form>
      <p className="signUpLink">
        <Link to="/signup">SignUp</Link>
      </p>
    </div>
  );
};

export default LoginPage;
