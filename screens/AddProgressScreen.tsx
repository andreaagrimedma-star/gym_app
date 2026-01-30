import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProgressScreen: React.FC = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/5">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center text-[#ff6b6b] text-base font-medium active:opacity-70 transition-opacity"
        >
          Annulla
        </button>
        <h1 className="text-lg font-bold leading-tight tracking-tight text-center absolute left-1/2 -translate-x-1/2 w-full max-w-[50%] truncate text-slate-900 dark:text-white">
          Nuova Misurazione
        </h1>
        <button 
          onClick={() => navigate(-1)}
          className="text-primary font-bold text-base hover:text-primary/80 transition-colors"
        >
          Salva
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-4 pt-6 pb-28 gap-8 overflow-y-auto no-scrollbar">
        
        {/* Date Selection */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate-500 dark:text-gray-400 ml-1">Data Rilevazione</label>
          <div className="relative">
             <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border-gray-200 dark:border-white/10 bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white dark:placeholder-slate-500 transition-shadow duration-200 [color-scheme:light] dark:[color-scheme:dark]"
                type="date"
              />
          </div>
        </div>

        {/* General Stats (Weight & Body Fat) */}
        <section className="flex flex-col gap-4">
           <div className="flex items-center gap-2 pb-1 border-b border-gray-200 dark:border-white/10">
            <span className="material-symbols-outlined text-primary">monitor_weight</span>
            <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">
              Dati Generali
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Peso (kg)</label>
                <input className="w-full rounded-xl border-gray-200 dark:border-white/10 bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400" placeholder="0.0" type="number" inputMode="decimal"/>
            </div>
             <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Massa Grassa (%)</label>
                <input className="w-full rounded-xl border-gray-200 dark:border-white/10 bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400" placeholder="0%" type="number" inputMode="decimal"/>
            </div>
          </div>
        </section>

        {/* Circumferences */}
        <section className="flex flex-col gap-4">
           <div className="flex items-center gap-2 pb-1 border-b border-gray-200 dark:border-white/10">
            <span className="material-symbols-outlined text-primary">straighten</span>
            <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">
              Circonferenze (cm)
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Petto</label>
                <input className="w-full rounded-xl border-gray-200 dark:border-white/10 bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400" placeholder="0" type="number" inputMode="decimal"/>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Braccia</label>
                <input className="w-full rounded-xl border-gray-200 dark:border-white/10 bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400" placeholder="0" type="number" inputMode="decimal"/>
            </div>
             <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Vita</label>
                <input className="w-full rounded-xl border-gray-200 dark:border-white/10 bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400" placeholder="0" type="number" inputMode="decimal"/>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Fianchi</label>
                <input className="w-full rounded-xl border-gray-200 dark:border-white/10 bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400" placeholder="0" type="number" inputMode="decimal"/>
            </div>
             <div className="flex flex-col gap-2 col-span-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Cosce</label>
                <input className="w-full rounded-xl border-gray-200 dark:border-white/10 bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400" placeholder="0" type="number" inputMode="decimal"/>
            </div>
          </div>
        </section>

        {/* Max Lifts (Massimali) */}
        <section className="flex flex-col gap-4">
           <div className="flex items-center gap-2 pb-1 border-b border-gray-200 dark:border-white/10">
            <span className="material-symbols-outlined text-primary">fitness_center</span>
            <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">
              Massimali (1RM)
            </h3>
          </div>
          <div className="flex flex-col gap-3">
             <div className="flex items-center gap-3">
                <div className="w-24 text-sm font-medium text-slate-600 dark:text-slate-300">Panca Piana</div>
                <input className="flex-1 rounded-xl border-gray-200 dark:border-white/10 bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400 text-right" placeholder="0 kg" type="number" inputMode="decimal"/>
            </div>
             <div className="flex items-center gap-3">
                <div className="w-24 text-sm font-medium text-slate-600 dark:text-slate-300">Squat</div>
                <input className="flex-1 rounded-xl border-gray-200 dark:border-white/10 bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400 text-right" placeholder="0 kg" type="number" inputMode="decimal"/>
            </div>
             <div className="flex items-center gap-3">
                <div className="w-24 text-sm font-medium text-slate-600 dark:text-slate-300">Stacco</div>
                <input className="flex-1 rounded-xl border-gray-200 dark:border-white/10 bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white placeholder:text-gray-400 text-right" placeholder="0 kg" type="number" inputMode="decimal"/>
            </div>
          </div>
        </section>

      </main>

      {/* Floating Action Button for Save (Alternative to Header) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-gray-200 dark:border-white/5 z-40 pb-8">
        <button 
          onClick={() => navigate(-1)}
          className="w-full h-14 bg-primary hover:bg-[#e65600] active:scale-[0.98] rounded-xl text-[#0a1810] text-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20"
        >
          <span>Salva Misurazione</span>
          <span className="material-symbols-outlined font-bold text-[22px]">check</span>
        </button>
      </div>

    </div>
  );
};

export default AddProgressScreen;