import { useState } from "react";

import Navbar from "/src/components/Navbar";

const questions = [
  // === 1–12: вибір однієї відповіді (1 бал) ===
  {
    id: "q1",
    index: 1,
    section: "Механіка",
    type: "single",
    text: "Тіло рухається рівномірно прямолінійно. Яка з величин є сталою?",
    options: [
      "Шлях, який проходить тіло за будь-який інтервал часу",
      "Швидкість тіла",
      "Прискорення тіла",
      "Сила, що діє на тіло"
    ],
    correct: 1
  },
  {
    id: "q2",
    index: 2,
    section: "Механіка",
    type: "single",
    text: "Маса 2 кг рухається зі швидкістю 5 м/с. Чому дорівнює її імпульс?",
    options: [
      "2,5 кг·м/с",
      "5 кг·м/с",
      "7 кг·м/с",
      "10 кг·м/с"
    ],
    correct: 3
  },
  {
    id: "q3",
    index: 3,
    section: "Молекулярна фізика та термодинаміка",
    type: "single",
    text: "Який процес відбувається при сталому тиску?",
    options: [
      "Ізотермічний",
      "Ізохорний",
      "Ізобарний",
      "Адіабатичний"
    ],
    correct: 2
  },
  {
    id: "q4",
    index: 4,
    section: "Електродинаміка",
    type: "single",
    text: "Сила струму в провіднику дорівнює 0,5 А, напруга — 10 В. Який опір провідника?",
    options: [
      "0,05 Ом",
      "5 Ом",
      "20 Ом",
      "50 Ом"
    ],
    correct: 1
  },
  {
    id: "q5",
    index: 5,
    section: "Коливання і хвилі. Оптика",
    type: "single",
    text: "Тіло здійснює гармонічні коливання. Яка величина є сталою?",
    options: [
      "Амплітуда",
      "Швидкість",
      "Прискорення",
      "Кінетична енергія"
    ],
    correct: 0
  },
  {
    id: "q6",
    index: 6,
    section: "Коливання і хвилі. Оптика",
    type: "single",
    text: "Промінь світла переходить із повітря в скло (n = 1,5). Як змінюється швидкість світла?",
    options: [
      "Збільшується в 1,5 раза",
      "Зменшується в 1,5 раза",
      "Не змінюється",
      "Спочатку зростає, потім зменшується"
    ],
    correct: 1
  },
  {
    id: "q7",
    index: 7,
    section: "Елементи теорії відносності. Квантова фізика",
    type: "single",
    text: "Квант світла — це…",
    options: [
      "Електрон",
      "Протон",
      "Фотон",
      "Нейтрон"
    ],
    correct: 2
  },
  {
    id: "q8",
    index: 8,
    section: "Механіка",
    type: "single",
    text: "Автомобіль рухається зі швидкістю 72 км/год. Яка це швидкість у м/с?",
    options: [
      "18 м/с",
      "20 м/с",
      "25 м/с",
      "30 м/с"
    ],
    correct: 1
  },
  {
    id: "q9",
    index: 9,
    section: "Електродинаміка",
    type: "single",
    text: "Яка з наведених величин є векторною?",
    options: [
      "Напруга",
      "Потужність",
      "Опір",
      "Сила струму"
    ],
    correct: 3
  },
  {
    id: "q10",
    index: 10,
    section: "Молекулярна фізика та термодинаміка",
    type: "single",
    text: "У якому випадку внутрішня енергія ідеального газу зменшується?",
    options: [
      "Газ стискають адіабатично",
      "Газ нагрівають при сталому об’ємі",
      "Газ розширюється адіабатично, виконуючи роботу",
      "Газ розширюється ізотермічно"
    ],
    correct: 2
  },
  {
    id: "q11",
    index: 11,
    section: "Елементи теорії відносності. Квантова фізика",
    type: "single",
    text: "Енергія спокою частинки масою m виражається формулою…",
    options: [
      "E = mv",
      "E = mv²",
      "E = mc²",
      "E = mgh"
    ],
    correct: 2
  },
  {
    id: "q12",
    index: 12,
    section: "Електродинаміка",
    type: "single",
    text: "Яка залежність описує закон Ома для ділянки кола?",
    options: [
      "I = U/R",
      "U = IR²",
      "R = UI",
      "P = I/U"
    ],
    correct: 0
  },

  // === 13–14: завдання на встановлення відповідності (логічні пари, по 1 балу за пару) ===
  {
    id: "q13",
    index: 13,
    section: "Механіка",
    type: "match",
    text: "Установіть відповідність між фізичною величиною та її одиницею SI.",
    left: [
      "Шлях s",
      "Швидкість v",
      "Сила F",
      "Робота A"
    ],
    right: [
      { key: "A", text: "Н (ньютон)" },
      { key: "B", text: "Дж (джоуль)" },
      { key: "C", text: "м (метр)" },
      { key: "D", text: "м/с (метр за секунду)" }
    ],
    correct: {
      0: "C",
      1: "D",
      2: "A",
      3: "B"
    }
  },
  {
    id: "q14",
    index: 14,
    section: "Електродинаміка",
    type: "match",
    text: "Установіть відповідність між величиною та її позначенням.",
    left: [
      "Електричний заряд",
      "Напруга",
      "Опір",
      "Потужність струму"
    ],
    right: [
      { key: "A", text: "P" },
      { key: "B", text: "R" },
      { key: "C", text: "U" },
      { key: "D", text: "q" }
    ],
    correct: {
      0: "D",
      1: "C",
      2: "B",
      3: "A"
    }
  },

  // === 15–20: відкрита форма з короткою відповіддю (2 бали) ===
  {
    id: "q15",
    index: 15,
    section: "Механіка",
    type: "short",
    text: "Тіло пройшло шлях 60 м за 3 с. Яка середня швидкість тіла? (відповідь у м/с)",
    correctValue: "20"
  },
  {
    id: "q16",
    index: 16,
    section: "Молекулярна фізика та термодинаміка",
    type: "short",
    text: "Ідеальний газ має тиск 100 кПа і займає об’єм 0,03 м³. Знайдіть температуру газу, якщо кількість речовини 1 моль. (R ≈ 8,3 Дж/(моль·К)) Відповідь округліть до цілих К.",
    correctValue: "361"
  },
  {
    id: "q17",
    index: 17,
    section: "Електродинаміка",
    type: "short",
    text: "Електричне коло має опір 10 Ом, до нього прикладено напругу 12 В. Обчисліть силу струму (у амперах).",
    correctValue: "1.2"
  },
  {
    id: "q18",
    index: 18,
    section: "Коливання і хвилі. Оптика",
    type: "short",
    text: "Хвиля поширюється зі швидкістю 340 м/с і має частоту 170 Гц. Знайдіть довжину хвилі (у метрах).",
    correctValue: "2"
  },
  {
    id: "q19",
    index: 19,
    section: "Елементи теорії відносності. Квантова фізика",
    type: "short",
    text: "Частота фотона дорівнює 6·10¹⁴ Гц. Скористайтесь сталою Планка h ≈ 6,6·10⁻³⁴ Дж·с та запишіть енергію фотона в джоулях у вигляді 3,96e-19 (науковий формат).",
    correctValue: "3.96e-19"
  },
  {
    id: "q20",
    index: 20,
    section: "Молекулярна фізика та термодинаміка",
    type: "short",
    text: "Газ отримав 400 Дж теплоти і виконав роботу 150 Дж. На скільки змінилася його внутрішня енергія? (відповідь у джоулях, зі знаком)",
    correctValue: "250"
  }
];

function normalizeShortAnswer(value) {
  if (!value) return "";
  return value.toString().trim().replace(",", ".").toLowerCase();
}

export default function NMT() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  function handleSingleChange(id, optionIndex) {
    setAnswers(prev => ({
      ...prev,
      [id]: optionIndex
    }));
  }

  function handleShortChange(id, value) {
    setAnswers(prev => ({
      ...prev,
      [id]: value
    }));
  }

  function handleMatchChange(id, leftIndex, value) {
    setAnswers(prev => ({
      ...prev,
      [id]: {
        ...(prev[id] || {}),
        [leftIndex]: value
      }
    }));
  }

  function checkResults() {
    let total = 0;

    questions.forEach(q => {
      const user = answers[q.id];

      if (q.type === "single") {
        if (user === q.correct) total += 1;
      }

      if (q.type === "short") {
        if (normalizeShortAnswer(user) === normalizeShortAnswer(q.correctValue)) {
          total += 2;
        }
      }

      if (q.type === "match") {
        const correctMap = q.correct;
        const userMap = user || {};
        Object.keys(correctMap).forEach(key => {
          if (userMap[key] === correctMap[key]) {
            total += 1;
          }
        });
      }
    });

    setScore(total);
  }

  return (
    <div className="min-h-screen bg-gray-300 p-4">
      <Navbar />

      <h1 className="text-left text-blue-800 text-5xl font-bold w-full mb-6">
        Тренажер НМТ
      </h1>

      <p className="text-gray-700 max-w-3xl mb-6">
        Нижче наведено 20 завдань з п&apos;яти розділів фізики. Виконай усі завдання, а потім
        натисни кнопку <b>&quot;Перевірити відповіді&quot;</b>, щоб побачити кількість набраних балів
        (максимум 32).
      </p>
      
      <div className="mt-10 mb-6 w-3/4 bg-white rounded-lg shadow p-4 md:p-6 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-2 text-blue-800">
          Довідкові матеріали
        </h2>
        <p className="text-gray-700 mb-3">
          Скористайся узагальненими таблицями та формулами з довідника (тригонометричні
          функції кутів, префікси до одиниць SI тощо), щоб перевіряти себе під час розв'язування задач.
        </p>
        
        <a
          href="/Fizyka_dovidkovi-materialy.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-3 text-blue-600 hover:text-blue-800 underline"
        >
          Відкрити довідкові матеріали (PDF)
        </a>
      </div>

      <div className="space-y-6">
        {questions.map(q => (
          <div
            key={q.id}
            className="bg-white rounded-lg shadow p-4 md:p-6"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h2 className="font-semibold text-lg mb-1 md:mb-0">
                №{q.index}. {q.section}
              </h2>
              <span className="text-sm text-gray-500">
                {q.type === "single" && "Вибір однієї відповіді · 1 бал"}
                {q.type === "match" && "Логічні пари · 1 бал за кожну правильну пару"}
                {q.type === "short" && "Коротка відповідь · 2 бали"}
              </span>
            </div>

            <p className="text-gray-800 mb-3">{q.text}</p>

            {q.type === "single" && (
              <div className="space-y-1">
                {q.options.map((opt, idx) => (
                  <label key={idx} className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name={q.id}
                      value={idx}
                      checked={answers[q.id] === idx}
                      onChange={() => handleSingleChange(q.id, idx)}
                      className="mt-1"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            )}

            {q.type === "short" && (
              <input
                type="text"
                value={answers[q.id] || ""}
                onChange={e => handleShortChange(q.id, e.target.value)}
                className="mt-1 w-full max-w-xs border rounded px-2 py-1"
                placeholder="Відповідь"
              />
            )}

            {q.type === "match" && (
              <div className="overflow-x-auto">
                <table className="min-w-full mt-2 border border-gray-200 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 px-2 py-1 text-left">Ліва частина</th>
                      <th className="border border-gray-200 px-2 py-1 text-left">Варіанти праворуч</th>
                    </tr>
                  </thead>
                  <tbody>
                    {q.left.map((leftItem, leftIndex) => (
                      <tr key={leftIndex}>
                        <td className="border border-gray-200 px-2 py-1">
                          {leftItem}
                        </td>
                        <td className="border border-gray-200 px-2 py-1">
                          <select
                            className="border rounded px-2 py-1"
                            value={(answers[q.id] && answers[q.id][leftIndex]) || ""}
                            onChange={e =>
                              handleMatchChange(q.id, leftIndex, e.target.value)
                            }
                          >
                            <option value="">— Оберіть літеру —</option>
                            {q.right.map(opt => (
                              <option key={opt.key} value={opt.key}>
                                {opt.key}) {opt.text}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <button
          onClick={checkResults}
          className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        >
          Перевірити відповіді
        </button>

        {score !== null && (
          <div className="text-lg font-semibold text-blue-800">
            Твій результат: {score} / 32 балів
          </div>
        )}
      </div>

      <div className="mt-10 bg-white rounded-lg shadow p-4 md:p-6 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-2 text-blue-800">
          Довідкові матеріали
        </h2>
        <p className="text-gray-700 mb-3">
          Скористайся узагальненими таблицями та формулами з довідника (тригонометричні
          функції кутів, префікси до одиниць SI тощо), щоб перевіряти себе під час розв&apos;язування задач.
        </p>
        
        <a
          href="/Fizyka_dovidkovi-materialy.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-3 text-blue-600 hover:text-blue-800 underline"
        >
          Відкрити довідкові матеріали (PDF)
        </a>
      </div>

      <p className="text-center text-gray-500 mt-8">
        © 2025 Study Assistant
      </p>
    </div>
  );
}
