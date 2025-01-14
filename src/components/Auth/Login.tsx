"use client";

import { HiOutlineLockClosed } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { useState, FormEvent } from "react";
import { FaApple } from "react-icons/fa";
import Link from "next/link";import "./styles.css"
import { FaGoogle } from "react-icons/fa";
const LogInLayout = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // Typing the SubmitHandler function
  const handleSignUp = (
    email: string,
    password: string,
  ): void => {
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  
  };

  const SubmitHandler = (e: FormEvent): void => {
    e.preventDefault();
    handleSignUp(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="styles max-w-7xl mx-auto p-6 text-gray-900 w-[400px]">
      <h2 className="text-[18px] font-bold mb-2 text-black">Log In</h2>
      <form
        onSubmit={SubmitHandler}
        className="flex flex-col items-center justify-center"
      >
 
        {/* email */}
        <div className="flex items-center border-[1px] w-full py-2 px-4 mt-3">
          <MdOutlineMailOutline className="text-gray-400 mr-2" />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            className="outline-none bg-transparent font-medium text-lg w-full placeholder:text-gray-400"
            placeholder="Enter your email"
          />
        </div>
        {/* password */}
        <div className="flex items-center border-[1px] w-full py-2 px-4 mt-3">
          <HiOutlineLockClosed className="text-gray-400 mr-2" />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            className="outline-none bg-transparent font-medium text-lg w-full placeholder:text-gray-400"
            placeholder="Enter password"
          />
        </div>
        {/* remember me checkbox */}
        <label className="text-start w-full cursor-pointer flex items-center gap-2 mt-3 text-[10px] md:text-sm">
          <input type="checkbox" name="" className="w-[20px] h-[20px]" />{" "}
          Remember me
        </label>
        {/* submit buttom */}
        <button
          type="submit"
          className="mt-7 text-center text-white border-[1px] border-transparent transition-all duration-300 hover:scale-95 hover:text-[#ff9f0d] hover:shadow-lg outline-none hover:bg-transparent  hover:border-[#ff9f0d]  bg-[#ff9f0d] text-[16px] py-2 px-8 w-full"
        >Log In
        </button>
        <p className="text-[10px] md:text-[12px] text-[#9e9e9e] mt-3 w-full  text-right"><Link href="/reset-password">Forgot password ?</Link></p>
        {/* login link */}
        <p className="text-gray-900 w-full flex justify-center gap-1 mt-6  text-[10px] md:text-sm">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </form>
{/* or section */}
      <div className="flex items-center mt-3">
        <div className=" border-[1px] w-full h-[1px]"></div>
        <p className=" border-[2px] text-[#646464] text-[10px] text-sm p-1">
          OR
        </p>
        <div className=" border-[1px] w-full h-[1px]"></div>
      </div>
      {/* Log In with google */}
      <button className=" mt-3 py-2 px-4 w-full border-[1px] flex items-center justify-between  h-11 transition-all duration-300 hover:scale-95 hover:text-[#ff9f0d] hover:shadow-lg outline-none">
        <FaGoogle
          className="w-5 h-5"
        />
        <p className="text-center flex-1">Continue with Google</p>
      </button>
      {/* Log In with apple */}
      <button className="mt-3 py-2 px-4 w-full border-[1px] flex items-center justify-between  h-11 transition-all duration-300 hover:scale-95 hover:text-[#ff9f0d] hover:shadow-lg outline-none">
        <FaApple
          className="w-5 h-5"
        />
        <p className="text-center flex-1">Continue with Google</p>
      </button>
    </div>
  );
};

export default LogInLayout;