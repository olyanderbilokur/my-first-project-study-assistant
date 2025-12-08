import Navbar from "/src/components/Navbar";

export default function Thermo() {
  return (
    <div className="min-h-screen bg-gray-300 p-6">

      <Navbar />
      
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Термодинаміка</h1>
      <p className="text-gray-700">
        Тут буде теорія про внутрішню енергію, роботу, теплоємність і закони термодинаміки.
      </p>
    </div>
  );
}
