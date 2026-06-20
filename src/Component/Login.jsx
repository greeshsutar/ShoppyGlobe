import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    method: "email",
    email: "",
    phone: "",
    password: ""
  });

  const [msg, setMsg] = useState("");

  // handle input
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  // handle method switch
  function handleMethod(e) {
    setData((prev) => ({
      ...prev,
      method: e.target.value
    }));
  }

  // submit
  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3090/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: data.password,
          ...(data.method === "email"
            ? { email: data.email }
            : { mobileno: data.phone })
        })
      });

      const result = await res.json();

      if (res.ok) {
        setMsg("Login successful");

        // store token (important)
        localStorage.setItem("token", result.token);

        // redirect
        navigate("/");
      } else {
        setMsg(result.msg || "Login failed");
      }
    } catch (e) {
      setMsg("Something went wrong");
      void e;
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form className="space-y-4">

          {/* Method */}
          <select
            name="method"
            value={data.method}
            onChange={handleMethod}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>

          {/* Conditional Input */}
          {data.method === "email" ? (
            <input
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full border px-3 py-2 rounded"
            />
          ) : (
            <input
              name="phone"
              value={data.phone}
              onChange={handleChange}
              placeholder="Enter Phone"
              className="w-full border px-3 py-2 rounded"
            />
          )}

          {/* Password */}
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="w-full border px-3 py-2 rounded"
          />

          {/* Button */}
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* Message */}
        <p className="text-center text-red-500 mt-3">{msg}</p>

        {/* Footer */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;