import { useState } from "react";

export default function MechanicsTasks() {
  const [topic, setTopic] = useState("");
  const [task, setTask] = useState("");

  // ЗАДАЧІ ПО ТЕМАМ
  const tasksDB = {
    kinematics: [
      "Автомобіль рухається рівномірно зі швидкістю 54 км/год. Який шлях він подолає за 20 хв?",
      "Тіло рухається з прискоренням 2 м/с². Яка його швидкість через 5 секунд?",
      "Камінь кинули вертикально вгору зі швидкістю 12 м/с. Якої максимальної висоти він досягне?"
    ],

    dynamics: [
      "На тіло масою 5 кг діє сила 20 Н. Визначити прискорення тіла.",
      "Яку силу потрібно прикласти, щоб надати тілу масою 10 кг прискорення 0,5 м/с²?",
      "Два тіла взаємодіють: перше діє на друге з силою 15 Н. Яка сила діє друге на перше?"
    ],

    conservation: [
      "Тіло масою 2 кг рухається зі швидкістю 4 м/с. Знайти його кінетичну енергію.",
      "З якої висоти падало тіло, якщо при торканні землі його швидкість становила 10 м/с?",
      "Тіло масою 3 кг ковзає без тертя з гори висотою 5 м. Яка його швидкість внизу?"
    ],

    oscillations: [
      "Маса на пружині здійснює коливання з періодом 2 с. Знайти частоту коливань.",
      "Маятник має довжину 1 м. Визначити період математичного маятника.",
      "Пружина має жорсткість 200 Н/м. Яка частота коливань вантажу масою 0,5 кг?"
    ],

    waves: [
      "Хвиля поширюється зі швидкістю 300 м/с та має частоту 150 Гц. Знайти довжину хвилі.",
      "Джерело створює хвилі з частотою 20 Гц. Яку швидкість має хвиля довжиною 3 м?",
      "Скільки часу потрібно хвилі, щоб пройти відстань 600 м, якщо її швидкість 200 м/с?"
    ],
  };

  function generateTask() {
    if (!topic) {
      setTask("Оберіть тему, будь ласка.");
      return;
    }
    const list = tasksDB[topic];
    const random = Math.floor(Math.random() * list.length);
    setTask(list[random]);
  }

  return (
    <div className="min-h-screen bg-gray-300 p-6">

      <h1 className="text-4xl font-bold text-blue-800 mb-6">Генератор задач з механіки</h1>

      <p className="text-gray-700 mb-4 text-lg">
        Оберіть тему з механіки та натисніть кнопку, щоб отримати випадкову задачу.
      </p>

      {/* ВИБІР ТЕМИ */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Тема:</label>
        <select
          className="p-2 rounded border"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          <option value="">-- Оберіть тему --</option>
          <option value="kinematics">Кінематика</option>
          <option value="dynamics">Динаміка</option>
          <option value="conservation">Закони збереження</option>
          <option value="oscillations">Коливання</option>
          <option value="waves">Хвилі</option>
        </select>
      </div>

      {/* КНОПКА */}
      <button
        onClick={generateTask}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
      >
        Згенерувати задачу
      </button>

      {/* ВИВІД ЗАДАЧІ */}
      {task && (
        <div className="mt-6 p-4 bg-white rounded shadow max-w-2xl text-lg">
          <b>Завдання:</b><br /> {task}
        </div>
      )}

    </div>
  );
}
