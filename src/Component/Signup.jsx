import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [data, setdata] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    method: "email"
  });

  const [msg, setmsg] = useState("");

  function handlechange(e) {
    const { name, value } = e.target;
    setdata((prev) => ({ ...prev, [name]: value }));
  }

  function handlemethod(e) {
    setdata((prev) => ({
      ...prev,
      method: e.target.value
    }));
  }

  async function handlebtn(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3090/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: data.fullname,
          password: data.password,
          ...(data.method === "email"
            ? { email: data.email }
            : { mobileno: data.phone })
        })
      });

      const result = await res.json();

      if (res.ok) {
        setmsg("Signup successful");
        navigate("/login"); // ✅ redirect after signup
      } else {
        setmsg(result.msg);
      }
    } catch (e) {
      setmsg("Something went wrong");
      void e;
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form className="space-y-4">
          {/* Name */}
          <input
            name="fullname"
            value={data.fullname}
            onChange={handlechange}
            placeholder="Full Name"
            className="w-full px-3 py-2 border rounded"
          />

          {/* Method */}
          <select
            name="method"
            value={data.method}
            onChange={handlemethod}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>

          {/* Conditional Field */}
          {data.method === "email" ? (
            <input
              name="email"
              value={data.email}
              onChange={handlechange}
              placeholder="Email"
              className="w-full border px-3 py-2 rounded"
            />
          ) : (
            <input
              name="phone"
              value={data.phone}
              onChange={handlechange}
              placeholder="Phone"
              className="w-full border px-3 py-2 rounded"
            />
          )}

          {/* Password */}
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handlechange}
            placeholder="Password"
            className="w-full px-3 py-2 border rounded"   
          />

          {/* Button */}
          <button
            type="submit"
            onClick={handlebtn}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Sign Up
          </button>
        </form>

        {/* Message */}
        <p className="text-center text-red-500 mt-2">{msg}</p>

        {/* Footer */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;