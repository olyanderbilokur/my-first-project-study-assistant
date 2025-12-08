import { Link } from "react-router-dom";

import Navbar from "/src/components/Navbar";


export default function Kinematics() {
  return (
    <div className="min-h-screen bg-gray-200 p-6">

      <Navbar />

      <Link to="/theory/mechanics" className="text-blue-600 underline">
        ← До Механіки
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-6">Кінематика</h1>

      <p className="text-gray-700 text-lg mb-4">
        Кінематика вивчає рух тіл без аналізу причин цього руху.
      </p>

      <h2 className="text-2xl font-semibold mt-4">Основні величини:</h2>
      <ul className="list-disc ml-6 mt-2 text-gray-700">
        <li>шлях s</li>
        <li>переміщення Δx</li>
        <li>швидкість v</li>
        <li>прискорення a</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Формули:</h2>
      <ul className="list-disc ml-6 mt-2 text-gray-700">
        <li>v = s / t</li>
        <li>a = Δv / t</li>
        <li>s = v₀t + (at²)/2</li>
        <li>v = v₀ + at</li>
      </ul>

    </div>
  );
}
