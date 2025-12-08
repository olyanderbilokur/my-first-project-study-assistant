import { Link } from "react-router-dom";

import Navbar from "/src/components/Navbar";

import motionLinear from "/src/assets/motion-linear.png";
import motionRotational from "/src/assets/motion-rotational.png";
import motionOscillating from "/src/assets/motion-oscillating.png";
import frameOfReference from "/src/assets/frame-of-reference.png";
import trajectory from "/src/assets/trajectory.png";
import coord1 from "/src/assets/coord1.png";
import coord2 from "/src/assets/coord2.png";
import coord3 from "/src/assets/coord3.png";
import unevenMovement1 from "/src/assets/uneven-movement1.png";
import unevenMovement2 from "/src/assets/uneven-movement2.png";
import uniformMovement2 from "/src/assets/uniform-movement2.png";
import uniformMovement1 from "/src/assets/uniform-movement1.png";

export default function Mechanics() {
  return (
    <div className="min-h-screen bg-gray-300 p-6">

      {/* Навігація */}
      <Navbar />

      <h1 className="text-4xl font-bold text-blue-800 mb-6">Механіка</h1>

      <p className="text-gray-700 max-w-3xl mb-2 text-lg">
        <strong>Механіка</strong> – наука про механічний рух матеріальних тіл і про взаємодії, які при цьому відбуваються між тілами. 
      </p>
      <p className="text-gray-700 max-w-3xl mb-2">
        <b>Основна задача механіки</b> – визначити положення тіла у просторі в будь-який момент часу. <br />
        <i>Механіка</i> містить такі розділи:<br />
        <i>Кінематика</i> – це розділ механіки, що вивчає рух тіл і при цьому не розглядає причин, якими цей рух викликаний. (Як рухається тіло?) <br />
        <i>Динаміка</i> – розділ механіки, в якому вивчаються причини виникнення механічного руху. (Чому рухається тіло?) <br />
        <b>Механічний рух</b> – це зміна з часом положення тіла (або частин тіла) в просторі відносно інших тіл. <br />
      </p>

      <p className="italic text-gray-700 mb-4 text-center">
        Найпростіші види механічного руху
      </p>
      {/* Блок з трьома картинками */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mb-4">
        
        {/* Поступальний */}
        <div className="flex flex-col items-center">
          
          <img src={motionLinear} className="w-40 mb-3 h-36 shadow-md rounded" alt="Поступальний рух" />
          <p className="text-lg font-medium">Поступальний</p>
        </div>

        {/* Обертальний */}
        <div className="flex flex-col items-center">
          
          <img src={motionRotational} className="w-auto mb-3 h-36 shadow-md rounded" alt="Обертальний рух" />
          <p className="text-lg font-medium">Обертальний</p>
        </div>

        {/* Коливальний */}
        <div className="flex flex-col items-center">
          
          <img src={motionOscillating} className="w-40 mb-3 h-36 shadow-md rounded" alt="Коливальний рух" />
          <p className="text-lg font-medium">Коливальний</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-2">
        <p className="text-gray-700 max-w-3xl mb-2">
        Тіло відліку – це тіло, відносно якого розглядають рух усіх інших тіл, про які йдеться в певній задачі. <br />
        Види систем координат: одновимірна, двовимірна або тривимірна. <br />
        Прилад для відліку часу (годинник, секундомір)<br />
        <b>Система відліку</b> – це тіло відліку, пов’язані з ним система координат і прилад для відліку часу.
        </p>  
        <img src={frameOfReference} className="w-auto mb-3 h-40 shadow-md rounded justify-self-center" alt="Система відліку" />
        
      </div>

      <p className="text-gray-700 max-w-3xl mb-2">
        <b>Матеріальна точка</b> – це фізична модель тіла, розмірами якого в умовах задачі можна знехтувати.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center  mb-2">
        <p className="text-gray-700 max-w-3xl">
          <b>Траєкторія руху</b> – це уявна лінія, в кожній точці якої послідовно перебувала матеріальна точка під час руху
          <br /><b>Шлях <i>l</i></b> – це фізична величина, яка дорівнює довжині траєкторії або довжині її певної ділянки. <i>(скалярна фізична величина)</i>
          <div className="text-center"><span><i>[l]=м</i></span></div>
          <b>Переміщення <span><i>s⃗</i></span></b> – це вектор, що з’єднує початкове та кінцеве положення матеріальної точки.
          <div className="text-center"><span><i>[s⃗ ]=м</i></span></div>
        </p>
        <img src={trajectory} className="w-auto mb-3 h-40 shadow-md rounded justify-self-center" alt="Траєкторія руху" />
      </div>
      
      <p className="text-gray-800 text-lg">
        У будь-який момент часу координати тіла можна визначити за формулами:
      </p>

      <div className="text-center text-xl font-semibold leading-relaxed">
        x = x₀ + sₓ <br />
        y = y₀ + sᵧ
      </div>

      <p className="text-gray-800 text-lg mb-2">
        Якщо напрямок переміщення збігається з напрямком осі координат,
        то <b>sₓ = s</b> <br />
        Якщо напрямок переміщення протилежний напрямку осі координат,
        то <b>sₓ = −s</b>
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mb-8">
        <img
          src={coord1}
          alt="Проєкції переміщення"
          className="w-full max-w-2xl rounded shadow-md"
        />

        <div className="grid grid-cols-1 gap-6 items-center">
          <img
            src={coord2}
            alt="sx = s"
            className="w-3/4 max-w-md rounded shadow-md justify-self-center"
          />

          <img
            src={coord3}
            alt="sx = -s"
            className="w-3/4 max-w-md rounded shadow-md justify-self-center"
          />
        </div>
        

      </div>

      <div className="mb-2">
        <p className="text-gray-800 text-2lg text-center mb-2">
          <b>Види механічного руху</b>
        </p>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center mb-2">
          <div className="grid grid-cols-1 items-center mb-2 gap-2">
            <p><b>Рівномірний рух</b> – рух, під час якого матеріальна точка за будь-які рівні інтервали часу долає однаковий шлях.</p>
            <img
              src={uniformMovement1}
              alt="sx = s"
              className="h-32 w-3/4 max-w-md rounded shadow-md justify-self-center"
            />
          
            <img
              src={uniformMovement2}
              alt="sx = -s"
              className="h-32 w-3/4 max-w-md rounded shadow-md justify-self-center"
            />
          </div>

          <div className="grid grid-cols-1 items-center mb-2 gap-2">  
            <p><b>Нерівномірний рух</b> – рух, під час якого матеріальна точка за рівні інтервали часу долає різний шлях.</p>
            <img
              src={unevenMovement1}
              alt="sx = s"
              className="h-32 w-3/4 max-w-md rounded shadow-md justify-self-center"
            />

            <img
              src={unevenMovement2}
              alt="sx = -s"
              className="h-32 w-3/4 max-w-md rounded shadow-md justify-self-center"
            />
          </div>
        </div>
        
          
        
      </div>
      
      <p className="text-gray-600 max-w-3xl mt-8 mb-8 mt-4 text-center">Обери підрозділ, щоб рухатися далі:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <Link to="/theory/mechanics/kinematics">
          <div className="bg-white p-4 shadow rounded-lg hover:bg-blue-50 cursor-pointer">
            <h2 className="text-xl font-semibold">Кінематика</h2>
            <p className="text-gray-600 text-sm">Опис руху без причин.</p>
          </div>
        </Link>

        <Link to="/theory/mechanics/dynamics">
          <div className="bg-white p-4 shadow rounded-lg hover:bg-blue-50 cursor-pointer">
            <h2 className="text-xl font-semibold">Динаміка</h2>
            <p className="text-gray-600 text-sm">Закони Ньютона, сили.</p>
          </div>
        </Link>

        <Link to="/theory/mechanics/conservation">
          <div className="bg-white p-4 shadow rounded-lg hover:bg-blue-50 cursor-pointer">
            <h2 className="text-xl font-semibold">Закони збереження</h2>
            <p className="text-gray-600 text-sm">Енергія, імпульс.</p>
          </div>
        </Link>

        <Link to="/theory/mechanics/oscillations">
          <div className="bg-white p-4 shadow rounded-lg hover:bg-blue-50 cursor-pointer">
            <h2 className="text-xl font-semibold">Коливання</h2>
            <p className="text-gray-600 text-sm">Гармонічні коливання.</p>
          </div>
        </Link>

        <Link to="/theory/mechanics/waves">
          <div className="bg-white p-4 shadow rounded-lg hover:bg-blue-50 cursor-pointer">
            <h2 className="text-xl font-semibold">Механічні хвилі</h2>
            <p className="text-gray-600 text-sm">Поширення хвиль у середовищах.</p>
          </div>
        </Link>

      </div>

      <p className="text-center text-gray-500 mt-8">© 2025 Study Assistant</p>
    </div>
  );
}
