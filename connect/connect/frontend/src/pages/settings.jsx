import { Link, useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-xl font-bold">Configurações</h1>

      <button className="bg-gray-500 text-white p-2 rounded">
        Alternar para conta estudantil
      </button>

      <button onClick={logout} className="bg-red-600 text-white p-2 rounded">
        Sair da conta
      </button>

      <Link to="/home" className="text-blue-600 underline">
        Voltar
      </Link>
    </div>
  );
}
