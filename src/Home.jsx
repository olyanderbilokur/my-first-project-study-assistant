import { Link } from "react-router-dom";

import Navbar from "/src/components/Navbar";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-300 p-4">
            
            {/* Навігація */}
            <Navbar />

            <h1 className="text-left text-blue-800 text-5xl font-bold mb-4">
            Study Assistant
            </h1>

            <p className="text-gray-700 text-lg max-w-3xl mb-8">
            <b>Study Assistant</b> — це інтерактивна навчальна платформа з фізики, створена для учнів,
            вчителів та абітурієнтів. Тут ви знайдете теорію, тренажери, задачі та інструменти,
            що допоможуть швидко та якісно підготуватися до уроків і НМТ.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Що ви знайдете всередині?
            </h2>

            <ul className="list-disc ml-6 text-gray-700 mb-8 space-y-1">
            <li><b>Повторення арифметики</b> — тренування базових математичних навичок.</li>
            <li><b>Конвертер величин</b> — зручний перетворювач фізичних одиниць.</li>
            <li><b>Теорія з фізики</b> — структуровані пояснення з прикладами.</li>
            <li><b>Генератор задач</b> — випадкові задачі за темами.</li>
            <li><b>Тренажер НМТ</b> — імітація реального тестування (20 завдань, 32 бали).</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Кому буде корисно?
            </h2>

            <ul className="list-disc ml-6 text-gray-700 mb-10 space-y-1">
            <li>Учням 7–11 класів</li>
            <li>Учителям фізики</li>
            <li>Абітурієнтам, що готуються до НМТ</li>
            <li>Батькам, які допомагають у навчанні</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Оберіть розділ:
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
                <Link
                to="/preparation" className="bg-white p-6 shadow rounded-xl text-lg font-semibold hover:bg-blue-50"
                >
                    Повторення: арифметика
                </Link>

                <Link
                to="/converter" className="bg-white p-6 shadow rounded-xl text-lg font-semibold hover:bg-blue-50"
                >
                    Конвертер величин
                </Link>
                <Link
                to="/theory" className="bg-white p-6 shadow rounded-xl text-lg font-semibold hover:bg-blue-50"
                >
                    Теорія
                </Link>

                <Link
                to="/tasks" className="bg-white p-6 shadow rounded-xl text-lg font-semibold hover:bg-blue-50"
                >
                    Генератор задач
                </Link>               

                <Link
                to="/nmt" className="bg-white p-6 shadow rounded-xl text-lg font-semibold hover:bg-blue-50"
                >
                    Тренажер НМТ
                </Link>
            </div>
        </div>
    )
}