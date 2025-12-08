import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center bg-white/40 p-4 rounded-lg backdrop-blur shadow-sm mb-6">

      <div className="flex gap-10 text-blue-700 font-semibold">

        <Link to="/" className="hover:text-blue-800">
          Головна
        </Link>

        <Link to="/preparation" className="hover:text-blue-800">
          Повторення: арифметика
        </Link>

        <Link to="/converter" className="hover:text-blue-800">
          Конвертор величин
        </Link>

        {/* === ТЕОРІЯ З ФІЗИКИ (Випадаюче меню) === */}
        <div className="relative group">
          <Link to="/theory" className="cursor-pointer hover:text-blue-800">
            Теорія з фізики ▾
          </Link>

          {/* ПЕРШИЙ рівень меню */}
          <div className="absolute -left-6 hidden group-hover:block bg-white shadow-lg rounded p-3 w-56 z-50">

            {/* Механіка — має підменю */}
            <div className="relative group/mech">
              <Link to="/theory/mechanics" className="cursor-pointer p-2 block hover:bg-blue-50 rounded">
                Механіка ➤
              </Link>

              {/* ДРУГИЙ рівень меню (підрозділи механіки) */}
              <div className="absolute top-2 -right-28 mr-2 hidden group-hover/mech:block
                              bg-blue-200 shadow-lg rounded p-3 w-52">

                <Link to="/theory/mechanics/kinematics" className="block p-1 hover:bg-blue-50 rounded">
                  Кінематика
                </Link>

                <Link to="/theory/mechanics/dynamics" className="block p-1 hover:bg-blue-50 rounded">
                  Динаміка
                </Link>

                <Link to="/theory/mechanics/conservation" className="block p-1 hover:bg-blue-50 rounded">
                  Закони збереження
                </Link>

                <Link to="/theory/mechanics/oscillations" className="block p-1 hover:bg-blue-50 rounded">
                  Коливання
                </Link>

                <Link to="/theory/mechanics/waves" className="block p-1 hover:bg-blue-50 rounded">
                  Хвилі
                </Link>

              </div>
            </div>

            {/* Інші розділи фізики */}
            <Link to="/theory/thermo" className="block p-2 hover:bg-blue-50 rounded">
              Молекулярна фізика і Термодинаміка
            </Link>

            <Link to="/theory/em" className="block p-2 hover:bg-blue-50 rounded">
              Електромагнетизм
            </Link>

            <Link to="/theory/optics" className="block p-2 hover:bg-blue-50 rounded">
              Оптика
            </Link>

            <Link to="/theory/quant" className="block p-2 hover:bg-blue-50 rounded">
              Квантова фізика
            </Link>

            <Link to="/theory/nmt-formulas" className="block p-2 hover:bg-blue-50 rounded">
              Формули НМТ
            </Link>

          </div>
        </div>

        <Link to="/tasks" className="hover:text-blue-800">
          Генератор задач
        </Link>

        <Link to="/nmt" className="hover:text-blue-800">
          Тренажер НМТ
        </Link>

      </div>
    </nav>
  );
}
