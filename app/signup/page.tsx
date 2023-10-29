"use client";

import React from "react";
import backgroundImage from "./Register-Background.png";
import { useForm, SubmitHandler } from "react-hook-form";
import axis from "axios";
import { useRouter } from "next/navigation";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Signup = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await axis.post("/api/userdetails", data);
      console.log(data);
      router.push("/login");
    } catch (error) {}
  };

  return (
    <div
      className="min-h-screen py-2"
      style={{ backgroundImage: `linear-gradient(115deg, #9f7aea, #fee2fe)` }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage:
                "url(http://localhost:3000/Register-Background.png)",
            }}
          >
            <h1 className="text-white text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                suspendisse aliquam varius rutrum purus maecenas ac
                <a href="#" className="text-purple-500 font-semibold">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. It’s free and only take a minute
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Firstname"
                  className="border border-gray-400 py-1 px-2"
                  {...register("firstName", { required: true, maxLength: 255 })}
                />
                <input
                  type="text"
                  placeholder="Lastname"
                  className="border border-gray-400 py-1 px-2"
                  {...register("lastName", { required: true, maxLength: 255 })}
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"
                  {...register("email", { required: true, maxLength: 255 })}
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                  {...register("password", { required: true, maxLength: 255 })}
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span className="px-2">
                  I accept the
                  <a href="#" className="text-purple-500 font-semibold px-1">
                    Terms of Use
                  </a>
                  &
                  <a href="#" className="text-purple-500 font-semibold px-1">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className="mt-5">
                <button
                  className="w-full bg-purple-500 py-3 text-center text-white"
                  type="submit"
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
