import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const AddClientScreen: React.FC = () => {
  const navigate = useNavigate();
  const [birthDate, setBirthDate] = useState('');
  
  // Subscription state defaults
  const [subStart, setSubStart] = useState(new Date().toISOString().split('T')[0]);
  const [subEnd, setSubEnd] = useState('');
  const [amount, setAmount] = useState('50');

  const age = useMemo(() => {
    if (!birthDate) return '';
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }, [birthDate]);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark">
      <div className="sticky top-0 z-50 flex items-center justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 border-b border-gray-200 dark:border-border-dark">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-10 h-10 -ml-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full active:bg-gray-200 dark:active:bg-surface-dark"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-tight absolute left-1/2 -translate-x-1/2 text-slate-900 dark:text-white">
          Nuovo Cliente
        </h2>
        <button className="text-primary font-bold text-base hover:text-primary/80 transition-colors px-2 py-1 rounded">
          Salva
        </button>
      </div>
      
      <div className="flex-1 flex flex-col gap-6 p-4 pb-32 overflow-y-auto no-scrollbar">
        {/* Photo Upload */}
        <div className="flex flex-col items-center justify-center py-4">
          <div className="relative group cursor-pointer">
            <div className="w-28 h-28 rounded-full bg-surface-dark border-4 border-primary/20 overflow-hidden flex items-center justify-center relative">
              <img
                alt="Abstract gym atmosphere placeholder"
                className="w-full h-full object-cover opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaXBiPnNmGaMRx0jRx88WqCN73hLFkqilpLX_Wckz4d4hQ5BGs8DLhddHIRlTpjTlnFFDpZU6259et6JD9IPNMnKBHcOqVJOYtdiJMixSXq-xubfrHB6eQLsZNgdZyT_yHLlI5C7WloO5WTQtIwl-hVZZ1KwC_bnhVoh3ePpGK2fme6LOMpjC9J8iGjcI7UB-a7psXvPZfj9L3LtWaEr6xdWshvFYyB-EjjuaXYlXOTB4Sh7JxmCEcgsqTjgOWAazN7OaDgFuD1ys"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-white !text-4xl">
                  photo_camera
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 bg-primary text-background-dark rounded-full p-2 border-4 border-background-dark flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined !text-lg font-bold">edit</span>
            </div>
          </div>
          <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">
            Tocca per aggiungere foto
          </p>
        </div>

        {/* Personal Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 pb-1 border-b border-gray-200 dark:border-border-dark">
            <span className="material-symbols-outlined text-primary">person</span>
            <h3 className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
              Anagrafica
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Nome
                </span>
                <input
                  className="form-input w-full rounded-xl border-gray-300 dark:border-border-dark bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white dark:placeholder-slate-500 transition-shadow duration-200"
                  placeholder="Mario"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Cognome
                </span>
                <input
                  className="form-input w-full rounded-xl border-gray-300 dark:border-border-dark bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white dark:placeholder-slate-500 transition-shadow duration-200"
                  placeholder="Rossi"
                  type="text"
                />
              </label>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
               <label className="flex flex-col gap-2 col-span-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Data di Nascita
                </span>
                <input
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="form-input w-full rounded-xl border-gray-300 dark:border-border-dark bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white dark:placeholder-slate-500 transition-shadow duration-200 [color-scheme:light] dark:[color-scheme:dark]"
                  type="date"
                />
              </label>
              <label className="flex flex-col gap-2 col-span-1">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Età
                </span>
                <input
                  readOnly
                  value={age}
                  className="form-input w-full rounded-xl border-gray-300 dark:border-border-dark bg-gray-100 dark:bg-surface-dark/50 h-12 px-4 text-base text-center font-bold text-slate-500 dark:text-slate-400 cursor-not-allowed"
                  placeholder="-"
                  type="text"
                />
              </label>
            </div>
          </div>
        </div>
        
        {/* Contacts */}
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-1 border-b border-gray-200 dark:border-border-dark pt-2">
                <span className="material-symbols-outlined text-primary">contact_phone</span>
                <h3 className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">Contatti</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Email</span>
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                        <input className="form-input w-full rounded-xl border-gray-300 dark:border-border-dark bg-white dark:bg-input-dark h-12 pl-12 pr-4 text-base focus:border-primary focus:ring-primary dark:text-white dark:placeholder-slate-500 transition-shadow duration-200" placeholder="mario.rossi@email.com" type="email"/>
                    </div>
                </label>
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Telefono</span>
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">call</span>
                        <input className="form-input w-full rounded-xl border-gray-300 dark:border-border-dark bg-white dark:bg-input-dark h-12 pl-12 pr-4 text-base focus:border-primary focus:ring-primary dark:text-white dark:placeholder-slate-500 transition-shadow duration-200" placeholder="+39 333 1234567" type="tel"/>
                    </div>
                </label>
            </div>
        </div>

        {/* Subscription Info (Moved here) */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 pb-1 border-b border-gray-200 dark:border-border-dark pt-2">
            <span className="material-symbols-outlined text-primary">payments</span>
            <h3 className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
              Abbonamento
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Inizio
              </span>
              <input
                value={subStart}
                onChange={(e) => setSubStart(e.target.value)}
                className="form-input w-full rounded-xl border-gray-300 dark:border-border-dark bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white dark:placeholder-slate-500 transition-shadow duration-200 [color-scheme:light] dark:[color-scheme:dark]"
                type="date"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Fine
              </span>
              <input
                value={subEnd}
                onChange={(e) => setSubEnd(e.target.value)}
                className="form-input w-full rounded-xl border-gray-300 dark:border-border-dark bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white dark:placeholder-slate-500 transition-shadow duration-200 [color-scheme:light] dark:[color-scheme:dark]"
                type="date"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Importo (€)
              </span>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-input w-full rounded-xl border-gray-300 dark:border-border-dark bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white dark:placeholder-slate-500 transition-shadow duration-200"
                type="number"
                inputMode="decimal"
              />
            </label>
            <div className="flex items-end">
                <button className="h-12 w-full bg-primary/20 text-primary hover:bg-primary hover:text-background-dark font-bold rounded-xl transition-colors border border-primary/20 flex items-center justify-center gap-2 active:scale-95">
                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                    Registra
                </button>
            </div>
          </div>
        </div>

        {/* Physical Data */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 pb-1 border-b border-gray-200 dark:border-border-dark pt-2">
            <span className="material-symbols-outlined text-primary">fitness_center</span>
            <h3 className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
              Dati Fisici
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Altezza (cm)</span>
                <input className="form-input w-full rounded-xl border-gray-300 dark:border-border-dark bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white dark:placeholder-slate-500 transition-shadow duration-200" placeholder="180" type="number" inputMode="numeric"/>
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Peso (kg)</span>
                <input className="form-input w-full rounded-xl border-gray-300 dark:border-border-dark bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white dark:placeholder-slate-500 transition-shadow duration-200" placeholder="75.5" type="number" inputMode="decimal"/>
            </label>
          </div>
        </div>

        {/* Circumferences */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 pb-1 border-b border-gray-200 dark:border-border-dark pt-2">
            <span className="material-symbols-outlined text-primary">straighten</span>
            <h3 className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
              Circonferenze (cm)
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Petto</span>
                <input className="form-input w-full rounded-xl border-gray-300 dark:border-border-dark bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white dark:placeholder-slate-500 transition-shadow duration-200" placeholder="100" type="number" inputMode="decimal"/>
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Braccia</span>
                <input className="form-input w-full rounded-xl border-gray-300 dark:border-border-dark bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white dark:placeholder-slate-500 transition-shadow duration-200" placeholder="35" type="number" inputMode="decimal"/>
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Vita</span>
                <input className="form-input w-full rounded-xl border-gray-300 dark:border-border-dark bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white dark:placeholder-slate-500 transition-shadow duration-200" placeholder="80" type="number" inputMode="decimal"/>
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Fianchi</span>
                <input className="form-input w-full rounded-xl border-gray-300 dark:border-border-dark bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white dark:placeholder-slate-500 transition-shadow duration-200" placeholder="95" type="number" inputMode="decimal"/>
            </label>
            <label className="flex flex-col gap-2 col-span-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Cosce</span>
                <input className="form-input w-full rounded-xl border-gray-300 dark:border-border-dark bg-white dark:bg-input-dark h-12 px-4 text-base focus:border-primary focus:ring-primary dark:text-white dark:placeholder-slate-500 transition-shadow duration-200" placeholder="55" type="number" inputMode="decimal"/>
            </label>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent z-40 max-w-md mx-auto">
          <button className="w-full h-14 bg-primary hover:bg-primary/90 text-background-dark font-bold text-lg rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined">save</span>
            Salva Cliente
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddClientScreen;