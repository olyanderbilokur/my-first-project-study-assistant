import { Link } from "react-router-dom";

import Navbar from "/src/components/Navbar";

export default function Dynamics() {
  return (
    <div className="min-h-screen bg-gray-300 p-6">

      <Navbar />
            
      <Link to="/theory/mechanics" className="text-blue-600 underline">
        ← До Механіки
      </Link>
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Динаміка</h1>
      <p className="text-gray-700">
        Тут буде теорія про другий закон Ньютона, силу, масу, прискорення та інші поняття динаміки.
      </p>
    </div>
  );
}
