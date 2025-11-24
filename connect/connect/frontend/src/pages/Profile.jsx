import { useParams, Link } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-3">Perfil: {id}</h1>
      <Link to="/home" className="text-blue-600">Voltar</Link>
    </div>
  );
}