import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AreaChart, Area, ResponsiveContainer, Defs, LinearGradient, Stop } from 'recharts';
import BottomNav from '../components/BottomNav';

const data = [
  { name: 'GIU', weight: 85 },
  { name: 'LUG', weight: 82 },
  { name: 'AGO', weight: 80 },
  { name: 'SET', weight: 78 },
  { name: 'OTT', weight: 76 },
  { name: 'NOV', weight: 75 },
];

const ClientDetailsScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark shadow-2xl pb-24">
      <div className="sticky top-0 z-50 flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between border-b border-white/5 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
        <div
          onClick={() => navigate(-1)}
          className="text-black dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer hover:opacity-80 transition-opacity"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </div>
        <h2 className="text-black dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">
          Dettagli Cliente
        </h2>
        <div className="flex size-12 items-center justify-end">
          <button className="flex items-center justify-center rounded-full size-10 bg-transparent hover:bg-white/10 text-black dark:text-white transition-colors">
            <span className="material-symbols-outlined text-[24px]">edit</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col p-4 gap-6">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative group cursor-pointer">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 shadow-xl ring-4 ring-white/5"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDudIY1d7FzKSVa9u8bVG0-JwlcP5RWWo7Fxw4Vgoebp5lIkslbP6Pi-2LFf5K9CpAB9Foxf32p5FpGAfpg0ODFmiYMOCyB6QuirD8X397AuHjl-0qmebGa-wt2c1n47xv57FQ7EuEt-Jdl95ykesz24Yltt7qN9LPsdyyvV12-4-ymHWkBf5NY7cMYD9phshn8hCo_QCckCE9wZ9rIFn1FSrb2lB45UtVEIWAktysf1-i4AWBVdx19JREzUQAASZbCAiIDNCnIbYc")',
              }}
            ></div>
            <div className="absolute bottom-0 right-0 bg-primary text-background-dark rounded-full p-1.5 border-4 border-background-dark">
              <span className="material-symbols-outlined text-[18px] font-bold">check</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-black dark:text-white text-2xl font-bold leading-tight text-center">
              Marco Rossi
            </h1>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-primary/20 text-primary uppercase tracking-wide">
                Premium
              </span>
              <p className="text-gray-500 dark:text-secondary-text text-sm font-medium">
                Membro dal Gen 2023
              </p>
            </div>
          </div>
          <div className="flex w-full gap-3 mt-2">
            <button className="flex-1 flex items-center justify-center gap-2 rounded-xl h-12 px-4 bg-surface-dark hover:bg-white/10 text-white text-sm font-bold transition-all border border-white/10">
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>Chiama</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 rounded-xl h-12 px-4 bg-primary hover:bg-[#e65600] text-background-dark text-sm font-bold shadow-[0_0_15px_rgba(255,95,0,0.3)] transition-all">
              <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
              <span>Messaggio</span>
            </button>
          </div>
          {/* New Payment Button */}
          <button 
            onClick={() => navigate('/payment')}
            className="w-full flex items-center justify-center gap-2 rounded-xl h-12 px-4 bg-surface-dark hover:bg-white/10 text-white text-sm font-bold transition-all border border-white/10"
          >
            <span className="material-symbols-outlined text-[20px]">payments</span>
            <span>Registra Pagamento</span>
          </button>
        </div>
      </div>
      <div className="h-px bg-white/10 w-full my-2"></div>
      <div className="flex flex-col px-4 pt-4 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-black dark:text-white text-xl font-bold leading-tight">
            Progressi Fisici
          </h2>
          <Link to="/progress" className="text-primary text-sm font-semibold hover:underline">
            Vedi tutto
          </Link>
        </div>
        <div className="flex p-1 bg-surface-dark rounded-xl mb-6">
          <label className="flex-1 cursor-pointer relative">
            <input
              defaultChecked
              className="peer sr-only"
              name="progress_type"
              type="radio"
              value="weight"
            />
            <div className="flex items-center justify-center py-2 px-3 rounded-lg text-sm font-medium text-secondary-text transition-all peer-checked:bg-background-dark peer-checked:text-white peer-checked:shadow-sm">
              Peso
            </div>
          </label>
          <label className="flex-1 cursor-pointer relative">
            <input className="peer sr-only" name="progress_type" type="radio" value="bmi" />
            <div className="flex items-center justify-center py-2 px-3 rounded-lg text-sm font-medium text-secondary-text transition-all peer-checked:bg-background-dark peer-checked:text-white peer-checked:shadow-sm">
              BMI
            </div>
          </label>
          <label className="flex-1 cursor-pointer relative">
            <input className="peer sr-only" name="progress_type" type="radio" value="max" />
            <div className="flex items-center justify-center py-2 px-3 rounded-lg text-sm font-medium text-secondary-text transition-all peer-checked:bg-background-dark peer-checked:text-white peer-checked:shadow-sm">
              Massimali
            </div>
          </label>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col p-3 rounded-xl bg-surface-dark border border-white/5">
            <p className="text-secondary-text text-xs uppercase font-bold tracking-wider mb-1">
              Inizio
            </p>
            <p className="text-white text-lg font-bold">
              85.0 <span className="text-sm font-normal text-secondary-text">kg</span>
            </p>
          </div>
          <div className="flex flex-col p-3 rounded-xl bg-surface-dark border border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-1">
              <span className="material-symbols-outlined text-primary text-[16px]">
                trending_down
              </span>
            </div>
            <p className="text-primary text-xs uppercase font-bold tracking-wider mb-1">
              Attuale
            </p>
            <p className="text-white text-2xl font-bold">
              75.0 <span className="text-sm font-normal text-secondary-text">kg</span>
            </p>
          </div>
          <div className="flex flex-col p-3 rounded-xl bg-surface-dark border border-white/5">
            <p className="text-secondary-text text-xs uppercase font-bold tracking-wider mb-1">
              Obiettivo
            </p>
            <p className="text-white text-lg font-bold">
              72.0 <span className="text-sm font-normal text-secondary-text">kg</span>
            </p>
          </div>
        </div>
        
        {/* Simple Chart Preview */}
        <div className="bg-surface-dark rounded-2xl p-4 border border-white/5 mb-4">
             <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-secondary-text text-xs font-medium">Andamento (Ultimi 6 mesi)</p>
              <p className="text-white text-3xl font-bold mt-1">75 kg</p>
            </div>
            <div className="flex items-center text-primary bg-primary/10 px-2 py-1 rounded text-xs font-bold">
              <span className="material-symbols-outlined text-[16px] mr-0.5">arrow_downward</span>
              11.8%
            </div>
          </div>
          <div className="h-32 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="chartGradientSmall" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF5F00" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FF5F00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="weight" stroke="#FF5F00" strokeWidth={2} fillOpacity={1} fill="url(#chartGradientSmall)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
      <div className="h-2 bg-surface-dark w-full"></div>
      <div className="flex flex-col px-4 py-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-black dark:text-white text-xl font-bold leading-tight">
            Storico Pagamenti
          </h2>
          <Link
            to="/payment"
            className="flex items-center justify-center rounded-full size-8 bg-surface-dark border border-white/10 text-primary"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
          </Link>
        </div>
        <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-surface-dark to-surface-dark/50 border-l-4 border-primary mb-6 shadow-lg">
          <div className="flex flex-col">
            <span className="text-xs text-secondary-text font-medium uppercase tracking-wider">
              Prossimo Pagamento
            </span>
            <span className="text-white font-bold text-lg mt-0.5">15 Dicembre 2023</span>
          </div>
          <div className="text-right">
            <span className="block text-white font-bold text-xl">€50.00</span>
            <span className="text-xs text-yellow-500 font-medium">In attesa</span>
          </div>
        </div>
         <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-10 rounded-full bg-surface-dark text-white group-hover:bg-primary group-hover:text-background-dark transition-colors">
                  <span className="material-symbols-outlined text-[20px]">payments</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm">Pagamento in contanti</span>
                  <span className="text-secondary-text text-xs">15 Nov 2023 • 14:30</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-white font-bold text-sm">- €50.00</span>
                <div className="flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-primary"></span>
                  <span className="text-[10px] text-primary font-medium">Pagato</span>
                </div>
              </div>
            </div>
         </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ClientDetailsScreen;