import { Link } from "react-router-dom";
import Navbar from "/src/components/Navbar";

export default function Dynamics() {
  return (
    <div className="min-h-screen bg-gray-300 p-6 leading-relaxed">
      <Navbar />

      <Link
        to="/theory/mechanics"
        className="text-blue-700 underline block mb-4"
      >
        ← До Механіки
      </Link>

      <h1 className="text-4xl font-bold mb-6 text-blue-900">Динаміка</h1>

      <div className="px-6 space-y-8">

        {/* 0. Вступ */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">Вступ</h2>
          <p>
            Динаміка — розділ механіки, що вивчає причини виникнення руху,
            взаємодію тіл та закони, яким підпорядковуються рух і сили.
            Матеріал підготовлено за PDF-конспектом ().
          </p>
        </section>

        {/* 1. Умови незмінності швидкості */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">
            1. Умови, за яких швидкість тіла залишається незмінною
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Тіло перебуває у спокої, якщо дії інших тіл скомпенсовані.</li>
            <li>
              Тіло рухається рівномірно прямолінійно, якщо на нього не діють
              інші тіла або їхні дії скомпенсовані.
            </li>
            <li>
              Рух вільного тіла (на яке не діють сили) називають рухом за
              інерцією.
            </li>
          </ul>

          <div className="bg-gray-100 p-3 rounded mt-4 text-center font-semibold">
            Закон інерції (Галілей):  
            <br />
            Тіло зберігає стан спокою або рівномірного прямолінійного руху,
            якщо на нього не діють сили або вони скомпенсовані.
          </div>
        </section>

        {/* 2. Інерціальні системи відліку */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">2. Інерціальні системи відліку</h2>
          <p>
            Інерціальна система відліку — система, у якій виконується закон
            інерції. Якщо одна система рухається рівномірно прямолінійно
            відносно іншої інерціальної системи, то вона також інерціальна.
          </p>
        </section>

        {/* 3. Перший закон Ньютона */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">3. Перший закон Ньютона</h2>
          <p>
            Існують такі системи відліку, в яких тіло зберігає стан спокою або
            рівномірного прямолінійного руху, якщо на нього не діють сили або
            їх дія скомпенсована.
          </p>
        </section>

        {/* 4. Принцип відносності Галілея */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">4. Принцип відносності Ґалілея</h2>
          <p>
            У всіх інерціальних системах відліку механічні явища
            відбуваються однаково за однакових початкових умов.
          </p>
        </section>

        {/* 5. Сила */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">5. Сила</h2>
          <p>
            Сила — векторна величина, що є мірою взаємодії, у результаті
            якої тіло змінює швидкість або деформується.
          </p>

          <div className="bg-gray-100 p-3 rounded mt-3 font-semibold text-center">
            [F] = 1 Н
          </div>

          <p className="mt-3 font-semibold">Рівнодійна:</p>
          <div className="bg-gray-100 p-3 rounded text-center font-semibold">
            F = F₁ + F₂ + … + Fₙ
          </div>
        </section>

        {/* 6. Інертність і маса */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">
            6. Інертність. Маса. Властивості маси
          </h2>
          <p>
            Маса — міра інертності та гравітаційної властивості тіла.
            <br />
            [m] = 1 кг
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>не залежить від системи відліку;</li>
            <li>не залежить від швидкості (у класичній механіці);</li>
            <li>додається в системах тіл;</li>
            <li>зберігається під час взаємодій.</li>
          </ul>
        </section>

        {/* 7. Другий закон Ньютона */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">7. Другий закон Ньютона</h2>

          <div className="bg-gray-100 p-3 rounded text-center font-semibold">
            a = F / m
          </div>

          <p className="mt-3">
            Прискорення завжди напрямлене в бік рівнодійної сил.
          </p>
        </section>

        {/* 8. Третій закон Ньютона */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">8. Третій закон Ньютона</h2>
          <div className="bg-gray-100 p-3 rounded text-center font-semibold">
            F₁ = −F₂
          </div>
          <p className="mt-3">
            Сили виникають парами, рівні за модулем і протилежні за напрямком.
          </p>
        </section>

        {/* 9. Гравітація + 10. Закон тяжіння */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">
            9–10. Гравітація і Закон всесвітнього тяжіння
          </h2>

          <div className="bg-gray-100 p-3 rounded text-center font-semibold">
            F = G·m₁·m₂ / r²
          </div>

          <p className="mt-3">
            Гравітаційні сили діють між усіма тілами у Всесвіті.  
            Гравітаційна стала:  
            G = 6,67·10⁻¹¹ Н·м²/кг²
          </p>
        </section>

        {/* 11–12. Сила тяжіння і g */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">11–12. Сила тяжіння. Прискорення g</h2>

          <div className="bg-gray-100 p-3 rounded text-center font-semibold">
            Fт = mg  
            <br />
            g ≈ 9,8 м/с²
          </div>
        </section>

        {/* 13. Космічні швидкості */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">13. Космічні швидкості</h2>

          <div className="bg-gray-100 p-3 rounded text-center font-semibold">
            v₁ = √(GM / R)  
            <br />
            v₁ (Земля) ≈ 7,9 км/с
          </div>
        </section>

        {/* 14–17. Деформація, закон Гука, природа */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">14–17. Деформація і Закон Гука</h2>

          <div className="bg-gray-100 p-3 rounded text-center font-semibold">
            Fпруж = −kΔx
          </div>

          <p className="mt-3">
            Сила пружності завжди напрямлена протилежно видовженню.
          </p>
        </section>

        {/* 18. Вага тіла */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">18. Вага тіла</h2>

          <div className="bg-gray-100 p-3 rounded text-center font-semibold">
            P = mg  
            <br />
            P = m(g ± a)
          </div>
        </section>

        {/* 19–21. Тертя і опір */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">
            19–21. Тертя. Види тертя. Опір середовища
          </h2>

          <div className="bg-gray-100 p-3 rounded text-center font-semibold">
            Fтер = μN
          </div>
        </section>

        {/* 22–26. Рівновага, момент сили, види рівноваги */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">
            22–26. Рівновага. Момент сили. Центр мас. Види рівноваги
          </h2>

          <div className="bg-gray-100 p-3 rounded text-center font-semibold">
            M = F·d
          </div>

          <p className="mt-3">
            Тіло знаходиться в рівновазі, коли  
            ΣF = 0 і ΣM = 0.
          </p>
        </section>

      </div>
    </div>
  );
}
