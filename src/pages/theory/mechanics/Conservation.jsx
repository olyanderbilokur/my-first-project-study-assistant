import { Link } from "react-router-dom";

import Navbar from "/src/components/Navbar";

export default function Conservation() {
  return (
    <div className="min-h-screen bg-gray-300 p-6">

      <Navbar />
      
      <Link to="/theory/mechanics" className="text-blue-600 underline">
        ← До Механіки
      </Link>

      <h1 className="text-3xl font-bold text-blue-800 mb-4">
        Закони збереження
      </h1>

      <p className="text-gray-700">
        Тут буде теорія про енергію, імпульс та інші закони збереження.
      </p>
    </div>
  );
}
