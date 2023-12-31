"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";

import { MdLockOutline } from "react-icons/md";

const LoginPage = () => {
  const router = useRouter();

  const [user, setUser] = useState({ email: "", password: "" });

  const OnLogin = async () => {
    try {
      console.log("selected");
      const response = await axios.post("/api/login", user);
      console.log("Login Success:" + response.data);
      toast.success("Login success");
      router.push("/dashboard");
    } catch (error: any) {
      console.log("Login failed:" + error.message);
      toast.error(error.message);
    } finally {
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full px-20 text-center">
        <div className="bg-white rounded-2xl shadow-xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">Shanara </span>Tech
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">
                sign in to Account
              </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle />
                </a>
              </div>

              <p className="text-gray-400 my-3">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="mr-1"
                    />
                    Remember me
                  </label>
                  <a href="#" className="text-xs">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="button"
                  onClick={OnLogin}
                  className="border-2 border-green-200 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Investor!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us.
            </p>

            <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
              onClick={OnLogin}
            >
              <Link href="/signup">Sign Up</Link>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
