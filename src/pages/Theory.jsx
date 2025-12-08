import { Link } from "react-router-dom";

import Navbar from "/src/components/Navbar";

export default function Theory() {
  return (
    <div className="min-h-screen bg-gray-300 p-4">

      {/* Навігація */}
      <Navbar />

      {/* Заголовок */}
      <h1 className="text-left text-blue-800 text-5xl font-bold w-full mb-8">Теорія</h1>
     
           
        <div className="shadow-lg rounded-xl p-6 w-full max-w-3xl mx-auto text-xl text-center">
          <p className="text-gray-500">
            Тут зібрана теорія з основних розділів фізики, короткі формули та пояснення.  
          </p>
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <Link to="/theory/mechanics">
              <div className="flex flex-col justify-center shadow rounded-lg p-4 bg-white hover:bg-blue-50 h-32 text-center transition duration-300">
              <h2 className="text-xl font-semibold">Механіка</h2>
              <p className="text-gray-600 text-sm">Кінематика, динаміка, закони збереження, механічні коливання, механічні хвилі.</p>
            </div>
          </Link>

          <Link to="/theory/thermo">
            <div className="flex flex-col justify-center shadow rounded-lg p-4 bg-white hover:bg-blue-50 h-32 text-center transition duration-300">
              <h2 className="text-xl font-semibold">Молекулярна фізика та Термодинаміка</h2>
              <p className="text-gray-600 text-sm">Основні поняття, ідеальний газ, закони термодинаміки.</p>
            </div>
          </Link>
            
          <Link to="/theory/em">
            <div className="flex flex-col justify-center shadow rounded-lg p-4 bg-white hover:bg-blue-50 h-32 text-center transition duration-300">
              <h2 className="text-xl font-semibold">Електромагнетизм</h2>
              <p className="text-gray-600 text-sm">Електричне поле, струм, магнетизм, електромагнітна індукція.</p>
            </div>
          </Link>
            
          <Link to="/theory/optics">
            <div className="flex flex-col justify-center shadow rounded-lg p-4 bg-white hover:bg-blue-50 h-32 text-center transition duration-300">
              <h2 className="text-xl font-semibold">Оптика</h2>
              <p className="text-gray-600 text-sm">Геометрична, хвильова.</p>
            </div>
          </Link>
            
          <Link to="/theory/quant">
            <div className="flex flex-col justify-center shadow rounded-lg p-4 bg-white hover:bg-blue-50 h-32 text-center transition duration-300">
              <h2 className="text-xl font-semibold">Квантова фізика</h2>
              <p className="text-gray-600 text-sm">Фотоелектричний ефект, атом і ядро.</p>
            </div>
          </Link>
            
          <Link to="/theory/nmt-formulas">
            <div className="flex flex-col justify-center shadow rounded-lg p-4 bg-blue-100 hover:bg-blue-200 h-32 text-center transition duration-300">
              <h2 className="text-xl font-semibold">Формули НМТ</h2>
              
            </div>
          </Link>
           
        </div>
          
        
      

      <p className="text-center text-gray-500 mt-8">© 2025 Study Assistant</p>

    
    </div>
  )
}
