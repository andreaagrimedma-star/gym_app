import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const DashboardScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-20 flex items-center justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 border-b border-slate-200 dark:border-white/5">
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer">
            <div
              className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-primary"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4kuFHAC1iR-RRF_2dDBga4xFdI00w3-SGYkQDTHFQEeiWzwVABcsakEORk0jQNIgBucrBitWCX2wMpXgFccNlehlywq3YM7C1C8qQY2jJJ316SjL37ZDcnFH2LqZ1icqO1e6MqdLBNKpj1KyIMZrl7Fd5yuo9TOwUwOk4JwELb-rBIaX0VUuu1tP8vGqlC72UJaJ5l4YGsqbthad0bvGu6w3OcraOlc60qG2BFji_x_qqpRBfpnNhL1S-SxFBSU9Aryte4rmQbKU")',
              }}
            ></div>
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-primary border-2 border-background-light dark:border-background-dark"></div>
          </div>
        </div>
        <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          Dashboard
        </h1>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
            notifications
          </span>
        </button>
      </header>

      <section className="px-4 pt-6 pb-2">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Mercoledì, 24 Ott</p>
        <h2 className="text-3xl font-bold tracking-tight mt-1 text-slate-900 dark:text-white">
          Buongiorno, Coach
        </h2>
      </section>

      <section className="w-full overflow-x-auto no-scrollbar pl-4 py-4">
        <div className="flex gap-4 pr-4 w-max">
          <div className="flex min-w-[160px] flex-col justify-between rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm border border-slate-100 dark:border-white/5">
            <div className="flex items-start justify-between">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  groups
                </span>
              </div>
              <span className="flex items-center text-xs font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                +3
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Clienti Attivi
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">42</p>
            </div>
          </div>
          <div className="flex min-w-[160px] flex-col justify-between rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm border border-slate-100 dark:border-white/5">
            <div className="flex items-start justify-between">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  payments
                </span>
              </div>
              <span className="flex items-center text-xs font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                +12%
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Incasso Mese
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">€3.450</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4 px-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            In Scadenza
          </h3>
          <button className="text-sm font-semibold text-primary hover:text-primary/80">
            Vedi tutti
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div
            onClick={() => navigate('/payment')}
            className="cursor-pointer flex items-center justify-between rounded-xl bg-white dark:bg-card-dark p-3 shadow-sm border-l-4 border-yellow-500 transition-all hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div
                className="h-12 w-12 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOldKVLDSDHeHffAbqMbyF_h4e956lCIyClhOZ8BHB54NrNSuxi-U_vGVX9ePWMmXmEcvjPD206TfJ3K1KsmQm4Cm-nJ6UEkhKBvWsOTj5mmyCQ4N2r2Wkw_XA-GGXN5UwUQtyS7OYl3_jDVn6usA69Xqvlo9KOLkDyP4lnH3tEmhdFHab9YMfuSb8_X7ThOuB9yN0VVZtJdJwpOcMHLC4M2oIgW87yOp7Hjs8EWFyX1rSvSnfX9hcsb1Lqax4AGeazGoVaJJysL4")',
                }}
              ></div>
              <div className="flex flex-col">
                <p className="text-base font-bold leading-tight text-slate-900 dark:text-white">
                  Marco Rossi
                </p>
                <p className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">
                  Scade domani
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </div>
        </div>
      </section>

      <section className="mt-6 px-4 mb-4">
        <h3 className="text-lg font-bold tracking-tight mb-3 text-slate-900 dark:text-white">
          Attività Recente
        </h3>
        <div className="flex gap-4 items-center py-2 border-b border-slate-100 dark:border-white/5">
          <div className="bg-primary/20 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-xl">payments</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-900 dark:text-white">
              Matteo ha saldato la quota
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">10 minuti fa</p>
          </div>
        </div>
        <div className="flex gap-4 items-center py-2">
          <div className="bg-blue-500/20 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-blue-500 text-xl">
              check_circle
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-900 dark:text-white">
              Sara ha rinnovato l'abbonamento
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">1 ora fa</p>
          </div>
        </div>
      </section>
      <BottomNav />
    </div>
  );
};

export default DashboardScreen;