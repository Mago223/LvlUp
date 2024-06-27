import "./Registration.css";
import { useEffect } from "react";

export default function Registration() {
  useEffect(() => {
    const form = document.getElementById("registrationForm");

    const handleFormSubmit = (event) => {
      event.preventDefault();

      // Clear previous error messages
      document.querySelectorAll(".text-red-500").forEach((element) => {
        element.classList.add("hidden");
      });

      let isValid = true;

      // Validate username
      const fullName = document.getElementById("fullName").value;
      if (!fullName) {
        document.getElementById("fullNameError").classList.remove("hidden");
        isValid = false;
      }

      // Validate username
      const username = document.getElementById("username").value;
      if (!username) {
        document.getElementById("usernameError").classList.remove("hidden");
        isValid = false;
      }

      // Validate email
      const email = document.getElementById("email").value;
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email || !emailPattern.test(email)) {
        document.getElementById("emailError").classList.remove("hidden");
        isValid = false;
      }

      // Validate password
      const password = document.getElementById("password").value;
      if (!password) {
        document.getElementById("passwordError").classList.remove("hidden");
        isValid = false;
      }

      // Validate confirm password
      const confirmPassword = document.getElementById("confirm-password").value;
      if (password !== confirmPassword) {
        document
          .getElementById("confirmPasswordError")
          .classList.remove("hidden");
        isValid = false;
      }

      if (isValid) {
        // Submit the form if all validations pass
        // You can handle the form submission here, e.g., send data to the server
        alert("Form submitted successfully!");
      }
    };

    form.addEventListener("submit", handleFormSubmit);

    // Cleanup function to remove the event listener
    return () => {
      form.removeEventListener("submit", handleFormSubmit);
    };
  }, []);
  return (
    <div id="loginBody">
      <div
        id="formCard"
        className="bg-[#1F2025] text-[#181028] rounded-xl shadow-2xl p-8 max-w-md w-full"
      >
        <h2
          id="title"
          className="text-4xl font-bold text-center text-gray-800 mb-2"
        >
          LvlUp
        </h2>
        <p
          id="subheading"
          className="text-xl font-bold text-center text-gray-800 mb-6"
        >
          Unlock your next level
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
              required=""
            />
            <p className="text-red-500 text-sm mt-2 hidden" id="fullNameError">
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
              required=""
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
              required=""
            />
            <p className="text-red-500 text-sm mt-2 hidden" id="emailError">
              Please enter a valid email.
            </p>
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
              required=""
            />
            <p className="text-red-500 text-sm mt-2 hidden" id="passwordError">
              Password is required.
            </p>
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
              required=""
            />
            <p
              className="text-red-500 text-sm mt-2 hidden"
              id="confirmPasswordError"
            >
              Passwords do not match.
            </p>
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
    </div>
  );
}
