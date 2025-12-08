import { Link } from "react-router-dom";

import Navbar from "/src/components/Navbar";

import { useState } from "react";

export default function Converter() {

  const units = {
    length: {
      title: "Довжина",
      units: {
        mm: 0.001,
        cm: 0.01,
        dm: 0.1,
        m: 1,
        km: 1000,
      }
    },

    mass: {
      title: "Маса",
      units: {
        g: 0.001,
        mg: 0.000001,
        kg: 1,
        t: 1000
      }
    },

    time: {
      title: "Час",
      units: {
        s: 1,
        min: 60,
        hour: 3600,
        day: 86400,
        year: 31536000
      }
    }
  };

  const [category, setCategory] = useState("length");
  const [fromUnit, setFromUnit] = useState("mm");
  const [toUnit, setToUnit] = useState("m");
  const [result, setResult] = useState(null); 
  const [value, setValue] = useState("");

  function toStandard(value) {
    const num = Number(value)
    if (num === 0) return "0"

    const exp = num.toExponential();
    const [a, n] = exp.split("e");
    return (
      <span>
        {Number(a)} × 10<sup>{Number(n)}</sup>
      </span>
    );
  }
  
  function convert() {
    if (!value || isNaN(Number(value))) return; 

    const factorFrom = units[category].units[fromUnit];
    const factorTo = units[category].units[toUnit];

    const output = (Number(value) * factorFrom) / factorTo;

    setResult(output)
  }

  return (
    <div className="min-h-screen bg-gray-300 p-4">

      {/* Навігація */}
      <Navbar />

      {/* Заголовок */}
      <h1 className="text-left text-blue-800 text-5xl font-bold w-full mb-8">Конвертор величин</h1>

      {/* КОНВЕРТОР вибір категорії*/}
      <div className="flex justify-center">
        <div className="shadow-lg rounded-xl p-6 w-full max-w-xl text-xl text-center">
          <p className="text-gray-500">
            Виберіть категорію конвертації, щоб почати.
          </p>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Категорія:</label>
            <select
              onChange={(e) => {
                const cat = e.target.value
                setCategory(cat)

                const keys = Object.keys(units[cat].units);
                
                setFromUnit(keys[0]); // перша
                setToUnit(keys[keys.length - 1]); // остання
                setResult("");
              }}
              value={category} 
            >
              {Object.keys(units).map(key => (
                <option key={key} value={key}>{units[key].title}</option>
              ))}
            </select>
          </div>

          {/* КОНВЕРТОР вибір початкової одиниці вимірювання*/}
          <div className="mb-4">
            <label className="block font-semibold mb-2">З:</label>
            <select
              onChange={(e) => setFromUnit(e.target.value)}
              value={fromUnit}
            >{Object.keys(units[category].units).map(u => (
              <option key={u} value={u}>{u}</option>
            ))}</select>
          </div>

          {/* КОНВЕРТОР вибір кінцевої одиниці вимірювання*/}
          <div className="mb-4">
            <label className="block font-semibold mb-2">В:</label>
            <select
              onChange={(e) => setToUnit(e.target.value)}
              value={toUnit}
            >{Object.keys(units[category].units).map(t => (
              <option key={t} value={t}>{t}</option>
            ))}</select>
          </div>

          {/* ПОЛЕ ВВОДУ */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Значення:</label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="p-2 border rounded w-full" 
            />
          </div>

          
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={convert}
          >
            Конвертувати
          </button>

          {/* Результат */}
          {result !== null && (
            <div className="mt-6 font-bold text-center text-2xl">
              Результат: {toStandard(result)}
            </div>
          )}
        </div>

                
      </div>

        
      
      <p className="text-center text-gray-500 mt-8">© 2025 Study Assistant</p>

    </div>
  )
}
