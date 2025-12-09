import { Link } from "react-router-dom";
import Navbar from "/src/components/Navbar";

export default function Kinematics() {
  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      <Navbar />

      {/* HEADER */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 py-10 px-6 shadow-md mb-10">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          Кінематика
        </h1>
        <p className="text-blue-100 text-lg mt-3 max-w-3xl leading-relaxed">
          Розділ фізики, що вивчає рух тіл без аналізу причин цього руху.
        </p>
        <Link
          to="/theory/mechanics"
          className="inline-block mt-4 text-white underline hover:text-yellow-300 transition"
        >
          ← До Механіки
        </Link>
      </div>

      <div className="px-6 max-w-5xl mx-auto leading-relaxed">

        
        {/* 1 */}
        <section className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow hover:shadow-lg transition mb-8">
          <h2 className="text-3xl font-bold mb-3 text-blue-700">
            1. Рівномірний прямолінійний рух
          </h2>

          <p className="mb-3">
            <strong>Рівномірний прямолінійний рух</strong> – це рух, під час
            якого тіло за рівні проміжки часу здійснює однакові переміщення.
          </p>

          <p className="font-medium text-gray-700">Вектор швидкості:</p>
          <div className="bg-blue-50 p-3 rounded text-center font-semibold mb-3">
            v⃗ = s⃗ / t
          </div>

          <p className="font-medium text-gray-700">У проекціях:</p>
          <div className="bg-blue-50 p-3 rounded text-center mb-3">
            v = s/t &nbsp; | &nbsp; vₓ = sₓ/t
          </div>

          <p>
            Одиниця швидкості: <strong>1 м/с</strong>.  
            Графік vₓ(t) — пряма, паралельна осі часу.
          </p>
        </section>

        {/* 2 */}
        <section className="bg-white border-l-4 border-indigo-500 p-6 rounded-lg shadow hover:shadow-lg transition mb-8">
          <h2 className="text-3xl font-bold mb-3 text-indigo-700">
            2. Переміщення тіла при рівномірному русі
          </h2>

          <p className="font-medium mb-2">Основна формула:</p>
          <div className="bg-indigo-50 p-3 rounded text-center font-semibold mb-3">
            s⃗ = v⃗ t
          </div>

          <p className="font-medium">У проекціях:</p>
          <div className="bg-indigo-50 p-3 rounded text-center mb-3">
            s = vt &nbsp; | &nbsp; sₓ = vₓ t
          </div>

          <p>
            Переміщення чисельно дорівнює площі фігури під графіком vₓ(t).
          </p>
        </section>

        {/* 3 */}
        <section className="bg-white border-l-4 border-purple-500 p-6 rounded-lg shadow hover:shadow-lg transition mb-8">
          <h2 className="text-3xl font-bold mb-3 text-purple-700">
            3. Рівняння координати
          </h2>

          <p className="font-medium">Загальна формула:</p>
          <div className="bg-purple-50 p-3 rounded text-center font-semibold mb-3">
            x = x₀ + sₓ
          </div>

          <div className="bg-purple-50 p-3 rounded text-center font-semibold mb-3">
            sₓ = vₓ t
          </div>

          <div className="bg-purple-100 p-3 rounded text-center font-bold">
            ⇒ x = x₀ + vₓ t
          </div>
        </section>

        {/* 4 */}
        <section className="bg-white border-l-4 border-teal-500 p-6 rounded-lg shadow hover:shadow-lg transition mb-8">
          <h2 className="text-3xl font-bold mb-3 text-teal-700">
            4. Нерівномірний рух
          </h2>

          <p className="mb-2">
            Нерівномірний рух — рух, при якому тіло за рівні проміжки часу
            проходить різний шлях.
          </p>

          <p className="font-medium">Фізичні величини:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>середня шляхова швидкість</li>
            <li>середня векторна швидкість</li>
            <li>миттєва швидкість</li>
          </ul>
        </section>

        {/* 5 */}
        <section className="bg-white border-l-4 border-green-500 p-6 rounded-lg shadow hover:shadow-lg transition mb-8">
          <h2 className="text-3xl font-bold mb-3 text-green-700">5. Середня швидкість</h2>

          <h3 className="text-xl font-semibold mt-3 mb-2">Середня шляхова швидкість</h3>
          <div className="bg-green-50 p-3 rounded text-center font-semibold mb-3">
            vсер = l/t = (l₁ + ... + lₙ)/(t₁ + ... + tₙ)
          </div>

          <h3 className="text-xl font-semibold mt-4 mb-2">Середня швидкість переміщення</h3>
          <div className="bg-green-50 p-3 rounded text-center font-semibold mb-3">
            v⃗сер = s⃗/t
          </div>
        </section>

        {/* 6 */}
        <section className="bg-white border-l-4 border-yellow-500 p-6 rounded-lg shadow hover:shadow-lg transition mb-8">
          <h2 className="text-3xl font-bold mb-3 text-yellow-700">
            6. Миттєва швидкість
          </h2>

          <div className="bg-yellow-50 p-3 rounded text-center font-semibold mb-3">
            v⃗ = Δs⃗ / Δt &nbsp; (Δt → 0)
          </div>

          <p>Напрямок збігається з напрямком переміщення.</p>
        </section>

        {/* 7 */}
        <section className="bg-white border-l-4 border-orange-500 p-6 rounded-lg shadow hover:shadow-lg transition mb-8">
          <h2 className="text-3xl font-bold mb-3 text-orange-700">
            7. Закон додавання переміщень
          </h2>

          <div className="bg-orange-50 p-3 rounded text-center font-semibold text-lg">
            s⃗ = s⃗₁ + s⃗₂
          </div>
        </section>

        {/* 8 */}
        <section className="bg-white border-l-4 border-red-500 p-6 rounded-lg shadow hover:shadow-lg transition mb-8">
            <h2 className="text-3xl font-bold mb-3 text-red-700">
              8. Закон додавання швидкостей
            </h2>

            <div className="bg-red-50 p-3 rounded text-center font-semibold text-lg">
              v⃗ = v⃗₁ + v⃗₂
            </div>
        </section>

        {/* 9 */}
        <section className="bg-white border-l-4 border-blue-400 p-6 rounded-lg shadow hover:shadow-lg transition mb-8">
          <h2 className="text-3xl font-bold mb-3 text-blue-600">
            9. Рівноприскорений прямолінійний рух
          </h2>

          <p className="mb-3">
            Це рух, за якого швидкість змінюється однаково за рівні інтервали часу.
          </p>

          <div className="bg-blue-50 p-3 rounded text-center font-semibold mb-3">
            Δv⃗ / Δt = const
          </div>

          <h3 className="text-xl font-semibold mb-2">Прискорення</h3>
          <div className="bg-blue-50 p-3 rounded text-center font-semibold mb-3">
            a⃗ = (v⃗ − v⃗₀) / t
          </div>

          <h3 className="text-xl font-semibold mb-2">У проекції на OX</h3>
          <div className="bg-blue-50 p-3 rounded text-center font-semibold">
            aₓ = (vₓ − v₀ₓ) / t
          </div>
        </section>

        {/* 10 */}
        <section className="bg-white border-l-4 border-indigo-400 p-6 rounded-lg shadow hover:shadow-lg transition mb-8">
          <h2 className="text-3xl font-bold mb-3 text-indigo-600">
            10. Швидкість рівноприскореного руху
          </h2>

          <div className="bg-indigo-50 p-3 rounded text-center font-semibold mb-3">
            v⃗ = v⃗₀ + a⃗t
          </div>

          <div className="bg-indigo-50 p-3 rounded text-center font-semibold">
            vₓ = v₀ₓ + aₓ t
          </div>

          <p className="mt-3">
            Графік vₓ(t) — похила пряма, що показує зміну швидкості з часом.
          </p>
        </section>

        {/* 11 */}
        <section className="bg-white border-l-4 border-purple-400 p-6 rounded-lg shadow hover:shadow-lg transition mb-8">
          <h2 className="text-3xl font-bold mb-3 text-purple-600">
            11. Переміщення при рівноприскореному русі
          </h2>

          <p className="mb-2">Основна формула:</p>
          <div className="bg-purple-50 p-3 rounded text-center font-semibold mb-3">
            sₓ = (v₀ₓ + vₓ) / 2 · t
          </div>

          <p className="mb-2">Рівняння переміщення:</p>
          <div className="bg-purple-50 p-3 rounded text-center font-semibold mb-3">
            sₓ = v₀ₓ t + (aₓ t²)/2
          </div>

          <p className="mb-2">Додаткова формула:</p>
          <div className="bg-purple-50 p-3 rounded text-center font-semibold mb-3">
            sₓ = (vₓ² − v₀ₓ²)/(2aₓ)
          </div>

          <p>Графік sₓ(t) — парабола.</p>
        </section>

        {/* 12 */}
        <section className="bg-white border-l-4 border-teal-400 p-6 rounded-lg shadow hover:shadow-lg transition mb-8">
          <h2 className="text-3xl font-bold mb-3 text-teal-600">
            12. Рівняння координати при рівноприскореному русі
          </h2>

          <p className="mb-2">Загальне співвідношення:</p>
          <div className="bg-teal-50 p-3 rounded text-center font-semibold mb-3">
            x = x₀ + sₓ
          </div>

          <p className="mb-2">Підставляємо sₓ:</p>
          <div className="bg-teal-50 p-3 rounded text-center font-semibold mb-3">
            sₓ = v₀ₓ t + (aₓ t²)/2
          </div>

          <div className="bg-teal-100 p-3 rounded text-center font-bold">
            x = x₀ + v₀ₓ t + (aₓ t²)/2
          </div>

          <p className="mt-3">Графік x(t) — також парабола.</p>
        </section>

        {/* 13 */}
        <section className="bg-white border-l-4 border-yellow-400 p-6 rounded-lg shadow hover:shadow-lg transition mb-8">
          <h2 className="text-3xl font-bold mb-3 text-yellow-600">
            13. Вільне падіння
          </h2>

          <p className="mb-3">
            Вільне падіння — рух лише під дією сили тяжіння.
          </p>

          <div className="bg-yellow-50 p-3 rounded text-center font-semibold mb-3">
            g ≈ 9.8 м/с²
          </div>
        </section>

        {/* 14 */}
        <section className="bg-white border-l-4 border-red-400 p-6 rounded-lg shadow hover:shadow-lg transition mb-8">
          <h2 className="text-3xl font-bold mb-3 text-red-600">
            14. Рух тіла, кинутого вертикально
          </h2>

          <h3 className="text-xl font-semibold mb-2">Проекція швидкості:</h3>
          <div className="bg-red-50 p-3 rounded text-center font-semibold mb-3">
            vᵧ = v₀ᵧ + g t
          </div>

          <h3 className="text-xl font-semibold mb-2">Проекція переміщення:</h3>
          <div className="bg-red-50 p-3 rounded text-center font-semibold mb-3">
            sᵧ = v₀ᵧ t + (g t²)/2
          </div>

          <div className="bg-red-50 p-3 rounded text-center font-semibold mb-3">
            sᵧ = (v₀ᵧ + vᵧ)/2 · t
          </div>

          <div className="bg-red-50 p-3 rounded text-center font-semibold mb-3">
            sᵧ = (vᵧ² − v₀ᵧ²) / (2g)
          </div>

          <h3 className="text-xl font-semibold mb-2">Координата:</h3>
          <div className="bg-red-100 p-3 rounded text-center font-bold">
            y = y₀ + v₀ᵧ t + (g t²)/2
          </div>
        </section>

        {/* 15 */}
        <section className="bg-white border-l-4 border-green-400 p-6 rounded-lg shadow hover:shadow-lg transition mb-8">
          <h2 className="text-3xl font-bold mb-3 text-green-600">
            15. Криволінійний рух під дією сили тяжіння
          </h2>

          <p className="mb-3">
            Рух тіла, кинутого горизонтально або під кутом, складається з двох незалежних рухів.
          </p>

          <h3 className="text-xl font-semibold mb-2">Горизонтальний рух</h3>
          <div className="bg-green-50 p-3 rounded text-center font-semibold mb-3">
            vₓ = const <br /> x = v₀ₓ t
          </div>

          <h3 className="text-xl font-semibold mb-2">Вертикальний рух</h3>
          <div className="bg-green-50 p-3 rounded text-center font-semibold mb-3">
            vᵧ = v₀ᵧ + g t <br />
            y = v₀ᵧ t + (g t²)/2
          </div>

          <h3 className="text-xl font-semibold mb-2">Швидкість та траєкторія</h3>
          <div className="bg-green-50 p-3 rounded text-center font-semibold mb-3">
            v = √(vₓ² + vᵧ²)
          </div>

          <div className="bg-green-50 p-3 rounded text-center font-semibold">
            tg α = vᵧ / vₓ
          </div>
        </section>

        {/* 16 */}
        <section className="bg-white border-l-4 border-blue-400 p-6 rounded-lg shadow hover:shadow-lg transition mb-12">
          <h2 className="text-3xl font-bold mb-3 text-blue-600">
            16. Криволінійний рух (Рух по колу)
          </h2>

          <p className="mb-3">
            Рівномірний рух по колу — найпростіший вид криволінійного руху.
          </p>

          <h3 className="text-xl font-semibold mt-3 mb-2">Період та частота</h3>
          <div className="bg-blue-50 p-3 rounded text-center font-semibold mb-3">
            T = t/N <br /> n = N/t
          </div>

          <div className="bg-blue-50 p-3 rounded text-center font-semibold mb-3">
            n = 1/T &nbsp; | &nbsp; T = 1/n
          </div>

          <h3 className="text-xl font-semibold mt-3 mb-2">Лінійна та кутова швидкість</h3>
          <div className="bg-blue-50 p-3 rounded text-center font-semibold mb-3">
            v = 2πr / T
          </div>

          <div className="bg-blue-50 p-3 rounded text-center font-semibold mb-3">
            ω = 2π / T
          </div>

          <div className="bg-blue-100 p-3 rounded text-center font-bold mb-3">
            v = ω r
          </div>

          <h3 className="text-xl font-semibold mt-3 mb-2">Доцентрове прискорення</h3>
          <div className="bg-blue-50 p-3 rounded text-center font-semibold mb-2">
            aдц = v² / r
          </div>

          <div className="bg-blue-50 p-3 rounded text-center font-semibold">
            aдц = ω² r
          </div>
        </section>
      </div>


    </div>
  );
}
