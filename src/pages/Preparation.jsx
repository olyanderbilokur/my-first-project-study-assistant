import { Link } from "react-router-dom";

import Navbar from "/src/components/Navbar";

import { useState } from "react";

export default function Preparation() {
    const [problem, setProblem] = useState("");
    const [answer, setAnswer] = useState("");
    const [result, setResult] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [level, setLevel] = useState("easy");
    const [correctCount, setCorrectCount] = useState(0);
    const [selectedTask, setSelectedTask] = useState(null);
    const [showCorrect, setShowCorrect] = useState(false)
    const [alreadyCounted, setAlreadyCounted] = useState(false);

    function formatOperand(n) {
        return n < 0 ? `(${n})` : `${n}`;
    }

    // Додавання
    function generateAddition() {
        let a, b;
        
        if (level === "easy") {
            a = Math.floor(Math.random()*100) + 1;
            b = Math.floor(Math.random()*100) + 1;
        }
        if (level === "medium") {
            a = Math.floor(Math.random()*200) - 100;
            b = Math.floor(Math.random()*200) - 100;
        }
        if (level==="hard") {
            a = Number((Math.random()*100).toFixed(2));
            b = Number((Math.random()*100).toFixed(3));
        }
        
        setProblem(`${a} + ${formatOperand(b)} =`);
        setCorrectAnswer(a + b);
        setAnswer("");
        setResult(null);
        setShowCorrect(false);
        setAlreadyCounted(false)
    };

    //Віднімання
    function generateSubtraction() {
        let a, b;

        if (level==="easy") {
            a = Math.floor(Math.random()*100) + 50;
            b = Math.floor(Math.random()*100);
        }
        if (level==="medium") {
            a = Math.floor(Math.random()*200) - 100;
            b = Math.floor(Math.random()*200) - 100;
        }
        if (level==="hard") {
            a = Number((Math.random()*100).toFixed(2));
            b = Number((Math.random()*100).toFixed(3));
        }
        
        setProblem(`${a} - ${formatOperand(b)} =`);
        setCorrectAnswer(a - b);
        setAnswer("");
        setResult(null);
        setShowCorrect(false);
        setAlreadyCounted(false)
    };

    // Множення
    function generateMultiplication() {
        let a, b;

        if (level==="easy") {
            a = Math.floor(Math.random() * 20) + 1;
            b = Math.floor(Math.random() * 12) + 1;
        }
        if (level==="medium") {
            a = Math.floor(Math.random() * 200) - 100;
            b = Math.floor(Math.random() * 200) - 100;
        }
        if (level==="hard") {
            a=Number((Math.random()*100).toFixed(2));
            b=Number((Math.random()*100).toFixed(3));
        }

        setProblem(`${a} x ${formatOperand(b)} =`);
        setCorrectAnswer(a * b);
        setAnswer("");
        setResult(null);
        setShowCorrect(false);
        setAlreadyCounted(false)
    };

    // Ділення
    function generateDivision() {
        let a, b;

        if (level==="easy") {
            a = Math.floor(Math.random() * 100) + 1;
            b = Math.floor(Math.random() * 100) + 1;
        }
        if (level==="medium") {
            a = Math.floor(Math.random() * 200) - 100;
            b = Math.floor(Math.random() * 20) - 10;
        }
        if (level==="hard") {
            a=Number((Math.random()*10).toFixed(3));
            b=Math.floor(Math.random()*10)+1;
        }
        const result = a * b;

        setProblem(`${result} ÷ ${formatOperand(a)} =`);
        setCorrectAnswer(b);
        setAnswer("");
        setResult(null);
        setShowCorrect(false);
        setAlreadyCounted(false)
    };

    //Піднесення до степення
    function generatePow() {
        let a, b;

        if (level==="easy") {
            a = Math.floor(Math.random() * 100);
            b = Math.floor(Math.random() * 3);
        }
        if (level==="medium") {
            a = Math.floor(Math.random()*10) + 1;
            b = Math.floor(Math.random()*4) + 2;
        }
        if (level==="hard") {
            const values = [2, 4, 8, 10];
            a = values[Math.floor(Math.random() * values.length)];
            b = Math.floor(Math.random()*5) - 2;
        }

        setProblem(<span>{a}<sup>{b}</sup> =</span>);
        setCorrectAnswer(a ** b);
        setAnswer("");
        setResult(null);
        setShowCorrect(false);
        setAlreadyCounted(false)
    };

    //Додавання показників степенів
    function generateSumPow() {
        let a, b, c;
        
        if (level==="easy") {
            a = Math.floor(Math.random() * 5);
            b = Math.floor(Math.random() * 2) + 1;
            c = Math.floor(Math.random() * 4);
        }
        if (level==="medium") {
            a = 10;
            b = Math.floor(Math.random() * 10) + 1;
            c = Math.floor(Math.random() * 10) - 10;
        }
        if (level==="hard") {
            a = Number((Math.random()*10).toFixed(1));
            b = Math.floor(Math.random() * 2) + 1;
            c = Math.floor(Math.random() * 4);
        }

        setProblem(<span>{a}<sup>{b}</sup> x {a}<sup>{c}</sup> =</span>);
        setCorrectAnswer(a ** (b + c))
        setAnswer("");
        setResult(null);
        setShowCorrect(false);
        setAlreadyCounted(false)
    };

    //Віднімання показників степенів
    function generateDifferencePow() {
        let a, b, c;
        
        if (level==='easy') {
            a = 10;
            b = Math.floor(Math.random() * 4) + 2;
            c = Math.floor(Math.random() * 4) + 2;
        }
        if (level==='medium') {
            a = 10;
            b = Math.floor(Math.random() * 4) + 2;
            c = Math.floor(Math.random() * 4) - 8;
        }
        if (level==="hard") {
            a = Math.floor(Math.random() * 10) + 2;
            b = Math.floor(Math.random() * 4) + 2;
            c = Math.floor(Math.random() * 4);
        }

        setProblem(<span>{a}<sup>{b}</sup> : {a}<sup>{c}</sup> =</span>);
        setCorrectAnswer(a ** (b - c));
        setAnswer("");
        setResult(null);
        setShowCorrect(false);
        setAlreadyCounted(false)
    };

    //Множення показників степенів
    function generateMultiplicationPow() {
        let a, b, c;

        if (level==='easy') {
            a = Math.floor(Math.random() * 5);
            b = Math.floor(Math.random() * 2) + 2;
            c = Math.floor(Math.random() * 4);
        }
        if (level==="medium") {
            a = 10;
            b = Math.floor(Math.random() * 4);
            c = Math.floor(Math.random() * 5);
        }
        if (level==="hard") {
            a = 10;
            b = Math.floor(Math.random() * 4);
            c = Math.floor(Math.random() * 9) - 10;
        }

        setProblem(<span>({a}<sup>{b}</sup>)<sup>{c}</sup> =</span>);
        setCorrectAnswer(a ** (b * c));
        setAnswer("");
        setResult(null);
        setShowCorrect(false);
        setAlreadyCounted(false)
    };

    return (
        <div className="min-h-screen bg-gray-300 p-4">
            
            <Navbar />

            <h1 className="text-left text-blue-800 text-5xl font-bold w-full mb-8">Повторення: арифметика</h1>
            <div>
                <div className="py-4 px-4 mx-auto shadow-lg rounded-xl w-full max-w-xl text-xl">
                    <p className="text-gray-500 text-center p-4">
                        Виберіть рівень складності завдань, щоб почати.
                    </p>
                <div className="flex flex-row justify-center gap-2 mb-6">
                    
                    <button
                        onClick={() => setLevel("easy")}
                        className={`px-4 py-2 rounded transition duration-300 ${level==="easy" ? "bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow" : "bg-blue-400 text-white hover:bg-blue-700 shadow"}`}
                    >
                        Легко
                    </button>

                    <button
                        onClick={() => setLevel("medium")}
                        className={`px-4 py-2 rounded transition duration-300 ${level==="medium" ? "bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow" : "bg-blue-400 text-white hover:bg-blue-700 shadow"}`}
                    >
                        Середньо
                    </button>

                        <button
                            onClick={() => setLevel("hard")}
                            className={`px-4 py-2 rounded transition duration-300 ${level==="hard" ? "bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow" : "bg-blue-400 text-white hover:bg-blue-700 shadow"}`}
                        >
                            Важко
                        </button>
                </div>
                

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-lg mx-auto">
                    <button 
                        onClick={() => {
                            generateAddition();
                            setSelectedTask("addition")
                        }} 
                        className={`flex flex-col items-center justify-center min-h-28 p-4 text-center shadow rounded-lg transition ${selectedTask === "addition" ? "bg-blue-100 hover:bg-blue-200 font-medium" : "bg-white hover:bg-blue-50"}`}
                    >
                    Додавання
                    </button>

                    <button 
                        onClick={() => {
                            generateSubtraction();
                            setSelectedTask("subtraction")
                        }} 
                        className={`flex flex-col items-center justify-center min-h-28 p-4 text-center shadow rounded-lg transition ${selectedTask === "subtraction" ? "bg-blue-100 hover:bg-blue-200 font-medium" : "bg-white hover:bg-blue-50"}`}
                    >
                    Віднімання
                    </button>

                    <button 
                        onClick={() => {
                            generateMultiplication();
                            setSelectedTask("multiplication")
                        }} 
                        className={`flex flex-col items-center justify-center min-h-28 p-4 text-center shadow rounded-lg transition ${selectedTask === "multiplication" ? "bg-blue-100 hover:bg-blue-200 font-medium" : "bg-white hover:bg-blue-50"}`}
                    >
                    Множення
                    </button>

                    <button 
                    onClick={() => {
                            generateDivision();
                            setSelectedTask("division")
                        }} 
                        className={`flex flex-col items-center justify-center min-h-28 p-4 text-center shadow rounded-lg transition ${selectedTask === "division" ? "bg-blue-100 hover:bg-blue-200 font-medium" : "bg-white hover:bg-blue-50"}`} 
                    >
                    Ділення
                    </button>

                    <button 
                        onClick={() => {
                            generatePow();
                            setSelectedTask("pow")
                        }} 
                        className={`flex flex-col items-center justify-center min-h-28 p-4 text-center shadow rounded-lg transition ${selectedTask === "pow" ? "bg-blue-100 hover:bg-blue-200 font-medium" : "bg-white hover:bg-blue-50"}`}
                    >
                    Cтепінь
                    </button>
                    
                    <button 
                        onClick={() => {
                            generateSumPow();
                            setSelectedTask("sumPow")
                        }} 
                        className={`flex flex-col items-center justify-center min-h-28 p-4 text-center shadow rounded-lg transition ${selectedTask === "sumPow" ? "bg-blue-100 hover:bg-blue-200 font-medium" : "bg-white hover:bg-blue-50"}`}
                    >
                    <span>Властивість степеня </span>
                    <span className="whitespace-nowrap text-base"> a<sup>b</sup> x a<sup>c</sup> = a<sup>b+c</sup></span>
                    </button>

                    <button 
                        onClick={() => {
                            generateDifferencePow();
                            setSelectedTask("differencePow")
                        }} 
                        className={`flex flex-col items-center justify-center min-h-28 p-4 text-center shadow rounded-lg transition ${selectedTask === "differencePow" ? "bg-blue-100 hover:bg-blue-200 font-medium" : "bg-white hover:bg-blue-50"}`}
                    >
                    <span>Властивість степеня</span>
                    <span className="whitespace-nowrap text-base"> a<sup>b</sup> : a<sup>c</sup> = a<sup>b-c</sup></span>
                    </button>

                    <button 
                        onClick={() => {
                            generateMultiplicationPow();
                            setSelectedTask("multiplicationPow")
                        }} 
                        className={`flex flex-col items-center justify-center min-h-28 p-4 text-center shadow rounded-lg transition ${selectedTask === "multiplicationPow" ? "bg-blue-100 hover:bg-blue-200 font-medium" : "bg-white hover:bg-blue-50"}`}
                    >
                    <span>Властивість степеня</span>
                    <span className="whitespace-nowrap text-base"> (a<sup>b</sup>)<sup>c</sup> = a<sup>b×c</sup></span>
                    </button>
                </div>

                {problem && (
                    <div className="w-full flex justify-center mt-6 mb-6 gap-4">
                    

                    {/* БЛОК ІЗ ЗАДАЧОЮ */}
                        <div className="relative p-4 bg-white shadow rounded-lg text-xl max-w-xl w-full">

                            {/* ЛІЧИЛЬНИК ПРАВОРУЧ */}
                            <div className="md:absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow flex flex-col items-center text-sm">
                                <p className="text-green-700">Правильно: </p>
                                <p className="text-lg font-semibold">{correctCount}</p>
                                <button
                                onClick={() => setCorrectCount(0)}
                                className="mt-1 px-3 py-1 bg-red-400 hover:bg-red-500 text-white rounded-md shadow" 
                                >
                                    Обнулити
                                </button>
                            </div>

                            

                            <div className="mb-4 text-2xl text-center">{problem}</div>

                            <input
                                value = {answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                className="border p-2 rounded mr-2"
                                placeholder="Введіть відповідь" 
                            />

                            <button
                                onClick={() => {
                                    if (Number(answer) === correctAnswer) {
                                        setResult("correct");
                                        if (!alreadyCounted) {
                                            setCorrectCount(prev => prev + 1);
                                            setAlreadyCounted(true);
                                        }
                                    } else {
                                        setResult("wrong");
                                    }
                                }}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Перевірити
                            </button>
                            
                            

                            {result === "correct" && (
                                <div className="mt-4 text-green-600 font-bold ">
                                    <p className="text-center"><span aria-hidden class="text-green-700 mr-2 font-bolg">&#10003;</span> Правильно!</p> 
                                </div>
                            )}

                            {result === "wrong" && (
                                <div className="mt-4 text-red-600 font-bold">
                                    <p className="text-center"><span aria-hidden class="text-red-700 mr-2 font-bolg">&#10005;</span> Неправильно</p>
                                    <div className="text-center">
                                        <button 
                                            onClick={() => {setShowCorrect(true)}}
                                            className="my-4 px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-700 text-center"
                                        >
                                            {showCorrect ? (<div>Правильна відповідь: {correctAnswer}</div>): (<div>Подивитися правильну відповідь</div>)}
                                        </button>
                                    </div> 
                                    
                                </div>
                            )}

                            
                        
                        </div>
                    </div>

                    
                )}
                </div>
            </div>
            <p className="text-center text-gray-500 mt-8">© 2025 Study Assistant</p>

        </div>
    )
}