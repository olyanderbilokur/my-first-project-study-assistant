import Navbar from "/src/components/Navbar";

export default function Quant() {
  return (
    <div className="min-h-screen bg-gray-300 p-6">

      <Navbar />
      
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Квантова фізика</h1>
      <p className="text-gray-700">
        Тут буде теорія про фотони, фотоелектричний ефект, моделі атома та квантові стани.
      </p>
    </div>
  );
}
