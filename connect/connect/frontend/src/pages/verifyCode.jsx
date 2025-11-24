import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function VerifyCode() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  async function handleVerify() {
    const realCode = localStorage.getItem("tempCode");
    const res = await axios.post("http://localhost:5000/auth/verify", {
      code,
      realCode
    });

    if (res.data.success) {
      navigate("/home");
    }
  }

  return (
    <div className="p-4 max-w-sm mx-auto flex flex-col gap-3">
      <h1 className="text-xl font-bold">Digite o código</h1>
      <input className="border p-2" placeholder="Código" onChange={e => setCode(e.target.value)} />
      <button className="bg-blue-600 text-white p-2 rounded" onClick={handleVerify}>
        Verificar
      </button>
    </div>
  );
}