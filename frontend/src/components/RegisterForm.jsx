import React,{ useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { username, email, password });
      alert("User registered successfully");
      navigate("/login");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="p-2 border" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="p-2 border" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="p-2 border" />
      <button type="submit" className="bg-blue-500 text-white p-2">Register</button>
    </form>
  );
}
