import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    const res = await axios.post("http://localhost:5000/auth/login", {
      email,
      password
    });

    localStorage.setItem("tempCode", res.data.code);
    navigate("/verify");
  }

  return (
    <div className="p-4 max-w-sm mx-auto flex flex-col gap-3">
      <h1 className="text-2xl font-bold">Login</h1>
      <input className="border p-2" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
      <input className="border p-2" type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
      <button className="bg-blue-600 text-white p-2 rounded" onClick={handleLogin}>
        Entrar
      </button>
      <Link to="/register" className="text-blue-700">Criar conta</Link>
    </div>
  );
}
