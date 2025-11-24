import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await axios.get("http://localhost:5000/conversations/1");
      setConversations(res.data);
    }
    load();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Conversas</h1>

      {conversations.map((c, i) => (
        <div key={i} className="border p-3 rounded mb-2">
          <p className="font-bold">{c.name}</p>
          <p className="text-gray-600 text-sm">{c.lastMessage}</p>
          <Link to={/profile/${c.name}} className="text-blue-600 text-sm">
            Ver perfil
          </Link>
        </div>
      ))}

      <Link
        to="/settings"
        className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded"
      >
        Configurações
      </Link>
    </div>
  );
}
