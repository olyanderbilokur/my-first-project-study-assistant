import { Link } from "react-router-dom";
import Navbar from "/src/components/Navbar";

export default function Kinematics() {
  return (
    <div className="min-h-screen bg-gray-200 p-6 leading-relaxed">
      <Navbar />

      <Link to="/theory/mechanics" className="text-blue-600 underline">
        ← До Механіки
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-6">Кінематика</h1>

      <p className="text-lg text-gray-700 mb-6">
        Кінематика вивчає механічний рух тіл, не аналізуючи причини цього руху.
        Нижче подано основні види руху та відповідні формули.
      </p>

      {/* 1. Рівномірний прямолінійний рух */}
      <section className="bg-white p-5 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-bold mb-3">
          1. Рівномірний прямолінійний рух
        </h2>

        <p className="mb-3">
          <strong>Рівномірний прямолінійний рух</strong> – це такий рух, під
          час якого тіло за будь-які рівні інтервали часу здійснює однакові
          переміщення.
        </p>

        <p className="mb-3">
          <strong>Швидкість рівномірного руху</strong> — це векторна величина,
          яка дорівнює відношенню переміщення <b>s⃗</b> до часу <b>t</b>:
        </p>

        <div className="bg-gray-100 p-3 rounded mb-3 text-center font-semibold">
          v⃗ = s⃗ / t
        </div>

        <p className="mb-2">Модуль та проекції швидкості:</p>
        <div className="bg-gray-100 p-3 rounded mb-3 text-center">
          v = s / t &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; vₓ = sₓ / t
        </div>

        <p className="mb-3">
          Одиниця швидкості в СІ: <strong>1 м/с</strong>.
        </p>

        <p>
          Графік проекції швидкості при рівномірному русі — це пряма, паралельна
          осі часу, адже швидкість не змінюється.
        </p>
      </section>

      {/* 2. Переміщення при рівномірному русі */}
      <section className="bg-white p-5 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-bold mb-3">
          2. Переміщення тіла при рівномірному прямолінійному русі
        </h2>

        <p className="mb-3">
          Переміщення визначається за формулою:
        </p>

        <div className="bg-gray-100 p-3 rounded mb-3 text-center font-semibold">
          s⃗ = v⃗t
        </div>

        <p className="mb-2">Модуль та проекції:</p>

        <div className="bg-gray-100 p-3 rounded mb-3 text-center">
          s = vt &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; sₓ = vₓt
        </div>

        <p className="mb-3">
          Переміщення чисельно дорівнює площі прямокутника під графіком vₓ(t).
        </p>

        <p>
          Графік проекції переміщення — відрізок прямої, що виходить із початку
          координат (sₓ ∼ t).
        </p>
      </section>

      {/* 3. Рівняння координати */}
      <section className="bg-white p-5 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-bold mb-3">
          3. Рівняння координати при рівномірному прямолінійному русі
        </h2>

        <p className="mb-3">
          <strong>Координата тіла</strong> визначається як:
        </p>

        <div className="bg-gray-100 p-3 rounded mb-3 text-center font-semibold">
          x = x₀ + sₓ
        </div>

        <div className="bg-gray-100 p-3 rounded mb-3 text-center font-semibold">
          sₓ = vₓ t
        </div>

        <div className="bg-gray-100 p-3 rounded mb-3 text-center font-bold">
          ⇒ x = x₀ + vₓ t
        </div>

        <p>
          де <strong>x₀</strong> — початкова координата, <strong>vₓ</strong> —
          проекція швидкості, <strong>t</strong> — час руху.
        </p>
      </section>

      {/* 4. Нерівномірний рух */}
      <section className="bg-white p-5 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-bold mb-3">4. Нерівномірний рух</h2>

        <p className="mb-3">
          <strong>Нерівномірний рух</strong> — рух, при якому тіло за рівні
          проміжки часу проходить різний шлях.
        </p>

        <p>
          Для опису нерівномірного руху використовують:
        </p>

        <ul className="list-disc ml-6 mt-2">
          <li>середню шляхову швидкість</li>
          <li>середню векторну швидкість</li>
          <li>миттєву швидкість</li>
        </ul>
      </section>

      {/* 5. Середня швидкість */}
      <section className="bg-white p-5 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-bold mb-3">
          5. Середня швидкість руху тіла
        </h2>

        <h3 className="text-xl font-semibold mt-3 mb-2">
          Середня шляхова швидкість
        </h3>

        <p className="mb-3">Скалярна величина, визначається формулою:</p>

        <div className="bg-gray-100 p-3 rounded mb-3 text-center font-semibold">
          vₛₑᵣ = l / t = (l₁ + l₂ + ... + lₙ) / (t₁ + t₂ + ... + tₙ)
        </div>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Середня швидкість переміщення
        </h3>

        <p className="mb-3">
          Векторна величина, визначається як:
        </p>

        <div className="bg-gray-100 p-3 rounded mb-3 text-center font-semibold">
          v⃗ₛₑᵣ = s⃗ / t = (s⃗₁ + s⃗₂ + ... + s⃗ₙ) / (t₁ + t₂ + ... + tₙ)
        </div>

        <p>
          Напрямок середньої швидкості збігається з напрямком переміщення.
        </p>
      </section>

      {/* 6. Миттєва швидкість */}
      <section className="bg-white p-5 rounded-lg shadow mb-10">
        <h2 className="text-2xl font-bold mb-3">6. Миттєва швидкість</h2>

        <p className="mb-3">
          <strong>Миттєва швидкість</strong> — швидкість у даний момент часу,
          визначається як середня швидкість за нескінченно малий інтервал часу:
        </p>

        <div className="bg-gray-100 p-3 rounded mb-3 text-center font-semibold">
          v⃗ = Δs⃗ / Δt &nbsp;&nbsp;&nbsp; (Δt → 0)
        </div>

        <p className="mb-3">
          Напрямок миттєвої швидкості збігається з напрямком переміщення в даний
          момент.
        </p>

        <p className="mb-3">
          При рівномірному русі миттєва швидкість = середня швидкість.
        </p>

        <p>
          В інших випадках швидкість змінюється:
        </p>

        <ul className="list-disc ml-6 mt-2">
          <li>за напрямком — у криволінійному рівномірному русі</li>
          <li>за значенням або напрямком — у прямолінійному нерівномірному русі</li>
          <li>за напрямком і значенням — у криволінійному нерівномірному русі</li>
        </ul>
      </section>
    </div>
  );
}
