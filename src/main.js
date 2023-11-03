import React, { useState } from "react";
import "./style.css";
import Button from "./button";

export default function Main(params) {
  // INPUT STATE
  const [inputData, setInputData] = useState({
    accountNumber: "",
    phoneNumber: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setInputData((p) => {
      return { ...p, [e.target.name]: e.target.value };
    });
  }
  console.log(inputData);
  //  INPUT STATE END
  //
  /// SUBMIT FORM FUNCTION
  function submitForm(e) {
    e.preventDefault();
    if (inputData.password === inputData.confirmPassword) {
      alert("Welcome Ezekiel you no money sapa dey eat you");
    } else {
      alert("error");
    }
  }
  /// SUBMIT FORM FUNCTION END
  ///
  // /PASSWORD STATE
  const [changeIcon, setChangeIcon] = useState(true);
  function handleChangeIcon() {
    setChangeIcon((c) => !c);
  }
  const passwordChangeText = changeIcon ? "password" : "text";
  const changeIconVisibility = changeIcon ? "visibility_off" : "visibility";
  ////// PASSWORD STATE END
  //
  // /CONFIRM PASSWORD STATE
  const [changeConfirmIcon, setChangeConfirmIcon] = useState(true);
  function handleChangeConfirmIcon() {
    setChangeConfirmIcon((c) => !c);
  }
  const passwordChangeConfirmText = changeConfirmIcon ? "password" : "text";
  const changeConfirmIconVisibility = changeConfirmIcon
    ? "visibility_off"
    : "visibility";

  let e;
  var pattern = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );

  if (pattern.test(inputData.password) && inputData.password.length === 8) {
    e = "rgb(255, 132, 7)";
    console.log("yes");
  } else {
    e = "red";
  }

  return (
    <div
      style={{
        width: "800px",
        margin: "auto",
        marginTop: "25px",
      }}
      id="contain-container"
    >
      <div className="text-container">
        <span className="step">STEP 1 of 2</span>
        <h1 className="header-text">Welcome, Let’s get you started</h1>
        <p className="text">
          Provide the information below to create your access internet banking
          profile
        </p>
      </div>

      {/*  */}
      <form onSubmit={submitForm} id="form-container">
        <div className="account-number-container">
          <label id="account-number">
            <span id="account-title">Account number</span>
            <input
              type="text"
              value={inputData.accountNumber}
              onChange={handleChange}
              name="accountNumber"
              htmlFor="account-number"
              placeholder="Account number"
              className="input-account-number"
            />
          </label>
        </div>
        {/*  */}
        <div className="phone-number-container">
          <label id="phone-number">
            <span id="phone-number-title">Phone number</span>
            <input
              type="text"
              value={inputData.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
              htmlFor="phone-number"
              placeholder="Phone number"
              className="input-phone-number"
            />
          </label>
        </div>
        {/*  */}
        <div className="username-container">
          <label id="userName">
            <span id="username-title">Enter desired username</span>
            <input
              type="text"
              value={inputData.userName}
              onChange={handleChange}
              name="userName"
              htmlFor="userName"
              placeholder="Enter desired username"
              className="input-userName"
            />
          </label>
        </div>
        {/*  */}
        <div className="password-container">
          <span id="password-title">Password</span>
          <label id="password">
            <span class="material-symbols-outlined" id="lock-icon">
              lock
            </span>
            <input
              type={passwordChangeText}
              value={inputData.password}
              onChange={handleChange}
              name="password"
              htmlFor="password"
              placeholder="Password"
              className="input-password"
            />
            <span
              class="material-symbols-outlined"
              id="visibility-icon"
              onClick={handleChangeIcon}
            >
              {changeIconVisibility}
            </span>
          </label>
        </div>
        {<Button orange={e} />}
        {/*  */}
        <div className="confirm-password-container">
          <span id="confirm-password-title">Confirm password</span>
          <label id="cPassword">
            <span class="material-symbols-outlined" id="lock-icon">
              lock
            </span>
            <input
              type={passwordChangeConfirmText}
              value={inputData.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              htmlFor="cPassword"
              placeholder="Confirm password"
              className="input-confirm-password"
            />
            <span
              class="material-symbols-outlined"
              id="visibility-icon"
              onClick={handleChangeConfirmIcon}
            >
              {changeConfirmIconVisibility}
            </span>
          </label>{" "}
        </div>
        {/*  */}
        <div>
          <button className="continue-button">Continue</button>
        </div>
      </form>
    </div>
  );
}
