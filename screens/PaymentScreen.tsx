import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/5">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center text-[#ff6b6b] text-base font-medium active:opacity-70 transition-opacity"
        >
          Annulla
        </button>
        <h1 className="text-lg font-bold leading-tight tracking-tight text-center absolute left-1/2 -translate-x-1/2 w-full max-w-[50%] truncate text-slate-900 dark:text-white">
          Registra Pagamento
        </h1>
        <div className="w-12"></div>
      </header>
      <main className="flex-1 flex flex-col px-4 pt-4 pb-28 gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between p-3 pr-4 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm active:scale-[0.99] transition-transform">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 ring-2 ring-white/10">
                <img
                  alt="Portrait"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBfXzRhrF4X6wUz2cWig0nKg48YcfE8DHXVJRnbnafA9IX1OcEveAVn-_Pxwr8vCeEJVEMk8HlRKAF2TQ6HHMRl6NyU1NYYd7tBKVCYsYfLTTMur-_7h2lQnHAsm990E3jei0yfiz8uyvsmTRckXxMCqQia0Pqm3u4WXi4bgcoVwVQwNDcYpBmlQGcVxoGlPXAhv9meWaorp18CG5txlcu9brlX1i1yUankRVjnsR7kS9eVzB8pgRVF9tKYUgYEJD5X-O9u-lMCZE"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80 mb-0.5">
                  Cliente
                </span>
                <span className="text-base font-semibold text-slate-900 dark:text-white leading-none">
                  Mario Rossi
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-400 dark:text-gray-500">
              expand_more
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-1">
            Importo Pagamento (Fisso)
          </label>
          <div className="relative group opacity-80">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500">
                euro_symbol
              </span>
            </div>
            <input
              className="block w-full rounded-xl border-0 ring-1 ring-gray-200 dark:ring-white/10 bg-gray-50 dark:bg-white/5 pl-12 pr-4 py-4 text-3xl font-bold text-slate-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 outline-none transition-all shadow-sm cursor-not-allowed"
              disabled
              readOnly
              type="text"
              value="50,00"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-gray-400">lock</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 ml-1">
            L'importo è fissato a 50€ per i pagamenti in contanti.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-1">
            Dettagli Temporali
          </label>
          <div className="flex flex-col divide-y divide-gray-100 dark:divide-white/10 rounded-xl bg-white dark:bg-white/5 ring-1 ring-gray-200 dark:ring-white/10 overflow-hidden shadow-sm">
            <div className="flex items-center justify-between p-4 active:bg-gray-50 dark:active:bg-white/10 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-lg bg-indigo-500/10 text-indigo-500 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-sm text-slate-900 dark:text-white">
                    Data Pagamento
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary font-medium text-sm">
                <span>Oggi, 24 Ott</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 active:bg-gray-50 dark:active:bg-white/10 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-lg bg-orange-500/10 text-orange-500 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">event_repeat</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-sm text-slate-900 dark:text-white">
                    Nuova Scadenza
                  </span>
                  <span className="text-xs text-gray-400 hidden sm:block">
                    Calcolata automaticamente (+1 mese)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                <span className="font-medium text-slate-700 dark:text-gray-300">
                  24 Nov 2024
                </span>
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-gray-200 dark:border-white/5 z-40 pb-8">
        <button className="w-full h-14 bg-primary hover:bg-[#e65600] active:scale-[0.98] rounded-xl text-[#0a1810] text-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
          <span>Conferma Pagamento</span>
          <span className="material-symbols-outlined font-bold text-[22px]">check_circle</span>
        </button>
      </div>
    </div>
  );
};

export default PaymentScreen;