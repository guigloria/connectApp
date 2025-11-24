import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleRegister() {
    await axios.post("http://localhost:5000/auth/register", {
      name,
      email,
      password
    });
    navigate("/");
  }

  return (
    <div className="p-4 max-w-sm mx-auto flex flex-col gap-3">
      <h1 className="text-2xl font-bold">Cadastro</h1>
      <input className="border p-2" placeholder="Nome" onChange={e => setName(e.target.value)} />
      <input className="border p-2" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
      <input className="border p-2" type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
      <button className="bg-green-600 text-white p-2 rounded" onClick={handleRegister}>
        Cadastrar
      </button>
    </div>
  );
}
