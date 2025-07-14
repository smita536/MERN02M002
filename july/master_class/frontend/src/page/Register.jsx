import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handelRegister = async () => {
    try {
      const res = await axios.post(`${baseUrl}/user/registration`, {
        fullName,
        email,
        password,
      });

      if (res?.data?.status) {
        alert(res?.data?.message);
        setFullName("");
        setEmail("");
        setPassword("");
      } else {
        alert(res?.data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-1 w-1/2 p-6 rounded shadow-xl m-auto gap-3 mt-16">
      <input
        type="text"
        placeholder="Enter full name"
        value={fullName}
        className="border outline-none p-2"
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        className="border outline-none p-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter password"
        value={password}
        className="border outline-none p-2"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handelRegister}
        className="border bg-teal-600  text-white p-2 cursor-pointer hover:bg-teal-500 transition-all duration-700"
      >
        Register
      </button>
    </div>
  );
};

export default Register;
