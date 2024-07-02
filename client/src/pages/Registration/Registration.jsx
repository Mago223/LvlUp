import "./Registration.css";
import signUpPic from "./dumbbells.jpg";

export default function Registration() {
  return (
    <div
      id="signupBody"
      className="flex flex-row justify-center items-center min-h-screen"
    >
      <div
        id="formCard"
        className="bg-[#1F2025] text-[#181028] rounded-tl-xl rounded-bl-xl shadow-2xl p-8 max-w-md w-full"
      >
        <h1
          id="title"
          className="text-4xl font-bold text-center text-gray-800 mb-2"
        >
          LvlUp
        </h1>
        <p
          id="subheading"
          className="text-xl font-bold text-center text-gray-800 mb-6"
        >
          Unlock Your Next Level
        </p>
        <form id="registrationForm" noValidate="">
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-4 py-2.5 border-0 rounded-lg shadow-sm ring-1 ring-inset ring-red-300 focus:ring-2 focus:ring-inset focus:ring-red-600"
              placeholder="Enter your full name"
              required
            />
            <p className="text-red-500 text-xs mt-2 hidden" id="fullNameError">
              Full name is required.
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2.5 border-0 rounded-lg shadow-sm ring-1 ring-inset ring-red-300 focus:ring-2 focus:ring-inset focus:ring-red-600"
              placeholder="Enter your username"
              required
            />
            <p className="text-red-500 text-sm mt-2 hidden" id="usernameError">
              Username is required.
            </p>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2.5 border-0 rounded-lg shadow-sm ring-1 ring-inset ring-red-300 focus:ring-2 focus:ring-inset focus:ring-red-600"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2.5 border-0 rounded-lg shadow-sm ring-1 ring-inset ring-red-300 focus:ring-2 focus:ring-inset focus:ring-red-600"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full px-4 py-2.5 border-0 rounded-lg shadow-sm ring-1 ring-inset ring-red-300 focus:ring-2 focus:ring-inset focus:ring-red-600"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold "
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 font-semibold">
            Sign In
          </a>
        </p>
      </div>

      <div>
        <img
          id="signupPic"
          className="rounded-tr-xl rounded-br-xl shadow-2xl max-w-md w-full"
          src={signUpPic}
        ></img>
      </div>
    </div>
  );
}
