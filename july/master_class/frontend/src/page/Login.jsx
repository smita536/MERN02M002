import { useState } from "react";
import axios from "axios";
import{useNavigate} from 'react-router'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate=useNavigate();

  const handelLogin = async () => {
    try {
      const res = await axios.post(`${baseUrl}/user/login`, {
        email,
        password,
      });

      if (res?.data?.status) {
        // alert(res?.data?.message);
           const user=res?.data?.user;
          const token=res?.data?.token;
          const role=res?.data?.user?.role;


          if(role=="admin"){
            navigate("/admin")
          }else if(role=="user"){
            Navigate("/user")
          }else{
            navigate("/")
          }

          console.log(role);

           localStorage.setItem("user",JSON.stringify(user))
           localStorage.setItem("token",token)

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
        onClick={handelLogin}
        className="border bg-teal-600  text-white p-2 cursor-pointer hover:bg-teal-500 transition-all duration-700"
      >
        Login
      </button>
    </div>
  );
};

export default Login;