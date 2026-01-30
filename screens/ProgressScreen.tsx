import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mag', weight: 85 },
  { name: 'Giu', weight: 82 },
  { name: 'Lug', weight: 80 },
  { name: 'Ago', weight: 78 },
  { name: 'Set', weight: 76 },
  { name: 'Ott', weight: 75 },
];

const ProgressScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-20 bg-background-light dark:bg-background-dark">
      <div className="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-200 dark:border-white/5">
        <button
          onClick={() => navigate(-1)}
          className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-white"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center truncate px-2 text-slate-900 dark:text-white">
          Mario Rossi
        </h2>
        <div className="flex w-10 items-center justify-end">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-white">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden pt-4">
        <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar snap-x">
          <button className="snap-start flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary pl-5 pr-5 shadow-[0_0_15px_rgba(255,95,0,0.3)] transition-transform active:scale-95">
            <p className="text-background-dark text-sm font-bold leading-normal">Peso</p>
          </button>
          {["Grasso %", "Petto", "Vita", "Fianchi"].map((label) => (
            <button
              key={label}
              className="snap-start flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-200 dark:bg-white/10 pl-5 pr-5 transition-colors hover:bg-gray-300 dark:hover:bg-white/20 active:scale-95"
            >
              <p className="text-slate-600 dark:text-white text-sm font-medium leading-normal">
                {label}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 py-6">
        <div className="flex min-w-72 flex-1 flex-col gap-2">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-slate-500 dark:text-gray-400 text-sm font-medium leading-normal uppercase tracking-wider">
                Andamento Peso
              </p>
              <div className="flex items-baseline gap-2 mt-1">
                <p className="text-slate-900 dark:text-white tracking-tight text-4xl font-bold leading-tight">
                  75 <span className="text-xl text-slate-500 font-medium">kg</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1 bg-orange-100 dark:bg-primary/20 px-2 py-1 rounded text-orange-700 dark:text-primary text-xs font-bold">
                <span className="material-symbols-outlined text-[16px]">trending_down</span>
                <span>-8.5%</span>
              </div>
              <p className="text-slate-400 text-xs font-medium mt-1">Ultimi 6 Mesi</p>
            </div>
          </div>
          <div className="relative flex h-[250px] w-full flex-col justify-end mt-4 p-4 rounded-xl bg-white dark:bg-[#2b160c] shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden">
             <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF5F00" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#FF5F00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                 {/* Hiding YAxis for cleaner look similar to prototype, but can be added */}
                <Tooltip 
                    contentStyle={{ backgroundColor: '#24120a', borderColor: '#5e2f12', borderRadius: '8px', color: '#fff' }} 
                    itemStyle={{ color: '#FF5F00' }}
                />
                <Area type="monotone" dataKey="weight" stroke="#FF5F00" strokeWidth={3} fillOpacity={1} fill="url(#chartGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 px-4 mb-6">
        <div className="flex flex-col gap-1 rounded-xl p-4 bg-white dark:bg-[#2b160c] border border-gray-100 dark:border-white/5 shadow-sm">
          <p className="text-slate-500 dark:text-gray-400 text-xs font-medium leading-normal">
            Attuale
          </p>
          <p className="text-slate-900 dark:text-white tracking-tight text-xl font-bold leading-tight">
            75 <span className="text-xs font-normal text-slate-500">kg</span>
          </p>
        </div>
        <div className="flex flex-col gap-1 rounded-xl p-4 bg-white dark:bg-[#2b160c] border border-gray-100 dark:border-white/5 shadow-sm">
          <p className="text-slate-500 dark:text-gray-400 text-xs font-medium leading-normal">
            Iniziale
          </p>
          <p className="text-slate-900 dark:text-white tracking-tight text-xl font-bold leading-tight">
            82 <span className="text-xs font-normal text-slate-500">kg</span>
          </p>
        </div>
        <div className="flex flex-col gap-1 rounded-xl p-4 bg-white dark:bg-[#2b160c] border border-gray-100 dark:border-white/5 shadow-sm">
          <p className="text-slate-500 dark:text-gray-400 text-xs font-medium leading-normal">
            Variazione
          </p>
          <p className="text-primary tracking-tight text-xl font-bold leading-tight">
            -7 <span className="text-xs font-normal opacity-80">kg</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 pb-2 pt-2">
        <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">
          Storico Misurazioni
        </h3>
        <button className="text-primary text-sm font-semibold">Vedi tutto</button>
      </div>

      <div className="flex flex-col gap-3 px-4">
        {[
          { date: "12 Ottobre 2023", type: "Check-in settimanale", val: "75.0 kg" },
          { date: "05 Ottobre 2023", type: "Check-in settimanale", val: "75.8 kg" },
          { date: "28 Settembre 2023", type: "Check-in mensile", val: "76.5 kg" },
          { date: "21 Settembre 2023", type: "Inizio programma", val: "78.0 kg" },
        ].map((item, i) => (
          <div
            key={i}
            className="group flex flex-col gap-3 rounded-xl bg-white dark:bg-[#2b160c] p-4 shadow-sm border border-gray-100 dark:border-white/5 active:scale-[0.99] transition-transform"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-900 dark:text-white text-sm font-bold">{item.date}</p>
                  <p className="text-slate-500 dark:text-gray-400 text-xs">{item.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-900 dark:text-white font-bold">{item.val}</span>
                <span className="material-symbols-outlined text-gray-400 text-sm">
                  chevron_right
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => navigate('/add-progress')}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-background-dark shadow-[0_4px_20px_rgba(255,95,0,0.4)] transition-transform hover:scale-105 active:scale-95"
        >
          <span className="material-symbols-outlined text-[32px]">add</span>
        </button>
      </div>
      <div className="h-8"></div>
    </div>
  );
};

export default ProgressScreen;