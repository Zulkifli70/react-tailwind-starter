import { useEffect, useState } from "react";

const App = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const s = now.getSeconds();
  const m = now.getMinutes();
  const h = now.getHours();

  const secDeg = s * 6;
  const minDeg = m * 6 + s * 0.1;
  const hourDeg = (h % 12) * 30 + m * 0.5;

  const ticks = Array.from({ length: 60 });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 grid place-items-center p-4">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-xl font-bold tracking-tight">Jam Analog</h1>

        <div className="relative h-64 w-64 rounded-full bg-slate-900 border-4 border-slate-700 shadow-2xl">
          {/* Tick + angka */}
          {ticks.map((_, i) => {
            const isHour = i % 5 === 0;
            return (
              <div
                key={i}
                className="absolute inset-0"
                style={{ transform: `rotate(${i * 6}deg)` }}
              >
                <div
                  className={`mx-auto mt-2 rounded-full ${
                    isHour
                      ? "h-4 w-1 bg-slate-100"
                      : "h-2 w-0.5 bg-slate-600"
                  }`}
                />
              </div>
            );
          })}

          <span className="absolute top-4 left-1/2 -translate-x-1/2 font-bold">12</span>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-bold">6</span>
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold">9</span>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold">3</span>

          {/* Jarum jam */}
          <div
            className="absolute left-1/2 bottom-1/2 w-1.5 rounded-full bg-slate-100 origin-bottom"
            style={{ height: "25%", transform: `translateX(-50%) rotate(${hourDeg}deg)` }}
          />
          {/* Jarum menit */}
          <div
            className="absolute left-1/2 bottom-1/2 w-1 rounded-full bg-slate-300 origin-bottom"
            style={{ height: "35%", transform: `translateX(-50%) rotate(${minDeg}deg)` }}
          />
          {/* Jarum detik */}
          <div
            className="absolute left-1/2 bottom-1/2 w-0.5 rounded-full bg-red-500 origin-bottom"
            style={{ height: "42%", transform: `translateX(-50%) rotate(${secDeg}deg)` }}
          />

          {/* Titik tengah */}
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500" />
        </div>

        <p className="text-2xl font-mono tabular-nums">
          {now.toLocaleTimeString("id-ID", { hour12: false })}
        </p>
      </div>
    </div>
  );
};

export default App;
