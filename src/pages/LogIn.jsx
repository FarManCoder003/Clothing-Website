import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const auth = getAuth();
  let navigate = useNavigate();

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log("user", user);
      })
      .then(() => {
        toast("Going to Accounts");
        setTimeout(() => {
          navigate("/account");
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <>
      <section className="container mx-auto lg:px-0 px-4">
        <div className="text-[#262626] font-sans font-bold text-[36px] lg:text-[49px] pt-[48px] lg:pt-[194px]">
          Login
        </div>
        <div className="text-[#767676] font-sans font-normal text-[12px]">
          <Link to="/">Home</Link> &gt; <Link to="/login">Login</Link>
        </div>
        <div className="lg:w-6/12 text-[#767676] font-sans font-normal text-[16px] py-[48px] lg:py-[64px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </div>
        <div className="w-full border-y border-[#F0F0F0] py-[64px]">
          <div className=" text-[#262626] font-sans font-bold text-[26px] lg:text-[39px] pb-[42px]">
            Returning Customer
          </div>
          <div className="lg:flex justify-between">
            <div className="lg:w-[33%]">
              <div className="text-[#262626] font-sans font-bold text-[16px]">
                Email address
              </div>
              <input
                onChange={handleEmail}
                className="text-[#767676] font-sans font-normal text-[14px] py-[15px] pl-[5px] w-full border-b border-[#F0F0F0] outline-none"
                type="email"
                placeholder="company@domain.com"
              />
            </div>
            <div className="lg:w-[65%]">
              <div className="text-[#262626] font-sans font-bold text-[16px] pt-5 lg:pt-0">
                Password
              </div>
              <input
                name="password"
                id="password"
                onChange={handlePassword}
                className="text-[#767676] font-sans font-normal text-[14px] py-[15px] pl-[5px] w-full border-b border-[#F0F0F0] outline-none"
                type="password"
                placeholder="••••••••"
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-[200px] h-[50px] leading-[50px] text-[#262626] hover:text-[#fff] hover:bg-[#262626] duration-500 ease-in-out font-sans font-bold text-[14px] text-center mt-[30px] border border-[#2B2B2B]"
          >
            Log in
          </button>
        </div>
        <div className="text-[#262626] font-sans font-bold text-[26px] lg:text-[39px] pt-[48px] pb-[36px]">
          New Customer
        </div>
        <div className="lg:w-1/2 text-[#767676] font-sans font-normal text-[16px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </div>
        <button className="w-[200px] h-[50px] leading-[50px] bg-[#262626] text-[#fff] hover:text-[#262626] hover:bg-[#fff] border border-[#262626] duration-500 ease-in-out font-sans font-bold text-[14px] text-center mt-[48px] mb-[120px]">
          <Link to="/signUp">Sign up</Link>
        </button>
        <ToastContainer
          position="top-right"
          autoClose={800}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </section>
    </>
  );
};

export default LogIn;
