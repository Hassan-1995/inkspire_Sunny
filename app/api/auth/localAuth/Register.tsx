"use client";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import Link from "next/link";

const colorTheme = "purple";

const themes = {
  green: {
    background: "bg-green-300",
    button: "bg-green-500",
    buttonHover: "hover:bg-green-800",
    text: "text-green-500",
  },
  purple: {
    background: "bg-purple-300",
    button: "bg-purple-500",
    buttonHover: "hover:bg-purple-800",
    text: "text-purple-500",
  },
};

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type RegisterProps = {
  setAuth: (auth: boolean) => void;
};

const Register = ({ setAuth }: RegisterProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white px-7 py-10 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-center font-bold text-2xl mb-6">Create Account</h1>

        {/* Social Login Icons */}
        <div className="flex justify-around items-center mb-4">
          <Link href="https://www.facebook.com/" target="_blank">
            <FaFacebookF className="text-xl text-blue-600 hover:scale-110 transition-transform" />
          </Link>
          <Link href="/api/auth/signin">
            <FcGoogle className="text-2xl hover:scale-110 transition-transform" />
          </Link>
          <Link href="https://www.linkedin.com/" target="_blank">
            <FaLinkedinIn className="text-xl text-blue-600 hover:scale-110 transition-transform" />
          </Link>
        </div>

        <p className={`text-center mb-4 ${themes[colorTheme].text}`}>
          or use your Email for Registration
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Name"
            className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-${colorTheme}-400`}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-sm text-red-400">Name is required.</p>
          )}

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-${colorTheme}-400`}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-sm text-red-400">Email is required.</p>
          )}

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-${colorTheme}-400`}
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-sm text-red-400">Password is required.</p>
          )}

          {/* Confirm Password Input */}
          <input
            type="password"
            placeholder="Confirm Password"
            className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-${colorTheme}-400`}
            {...register("confirmPassword", { required: true })}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-400">
              Confirm Password is required.
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 rounded text-white font-semibold ${themes[colorTheme].button} ${themes[colorTheme].buttonHover} transition-colors`}
          >
            SIGN UP
          </button>
        </form>

        {/* Login Redirect */}
        <div className="mt-4 text-center">
          <p className="text-sm inline-block mr-2">Already have an account?</p>
          <button
            onClick={() => setAuth(true)}
            className={`${themes[colorTheme].text} cursor-pointer text-sm font-semibold hover:underline`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
