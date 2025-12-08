import Navbar from "/src/components/Navbar";

export default function Optics() {
  return (
    <div className="min-h-screen bg-gray-300 p-6">

      <Navbar />
      
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Оптика</h1>
      <p className="text-gray-700">
        Тут буде теорія про відбивання, заломлення, лінзи та хвильові властивості світла.
      </p>
    </div>
  );
}
