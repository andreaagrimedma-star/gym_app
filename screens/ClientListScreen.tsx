import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const ClientListScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased text-slate-900 dark:text-white h-full min-h-screen flex flex-col pb-20">
      <header className="sticky top-0 z-20 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-black/5 dark:border-white/5">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-2xl font-bold tracking-tight">Elenco Clienti</h1>
          <Link
            to="/add-client"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background-dark transition hover:bg-opacity-90 active:scale-95"
          >
            <span className="material-symbols-outlined font-bold">add</span>
          </Link>
        </div>
      </header>
      <div className="px-4 pt-4 pb-2">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 dark:text-gray-400 group-focus-within:text-primary transition-colors">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input
            className="block w-full rounded-xl border-none bg-white dark:bg-surface-dark py-3 pl-10 pr-4 text-sm placeholder-slate-400 dark:placeholder-gray-400 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm"
            placeholder="Cerca cliente per nome..."
            type="text"
          />
        </div>
      </div>
      
      {/* Grid Layout Filters */}
      <div className="grid grid-cols-2 gap-3 px-4 py-4">
        <button className="flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-1 text-background-dark shadow-lg shadow-primary/20 transition active:scale-95">
          <span className="material-symbols-outlined text-[20px]">groups</span>
          <span className="text-sm font-bold">Tutti</span>
        </button>
        {["Regolare", "In Scadenza", "Scaduto"].map((label, idx) => (
          <button
            key={idx}
            className="flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 px-4 py-1 text-slate-600 dark:text-gray-300 transition active:scale-95 hover:bg-slate-100 dark:hover:bg-white/5"
          >
            <span className={`material-symbols-outlined text-[20px] ${
                idx === 0 ? 'text-green-500' : idx === 1 ? 'text-yellow-500' : 'text-red-500'
            }`}>
              {idx === 0 ? 'check_circle' : idx === 1 ? 'warning' : 'cancel'}
            </span>
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 flex flex-col gap-1 px-4">
        <div className="py-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-500">
            Oggi
          </h3>
        </div>
        <div
          onClick={() => navigate('/details')}
          className="group cursor-pointer relative flex items-center justify-between gap-4 rounded-xl bg-white dark:bg-surface-dark p-3 shadow-sm transition-all hover:shadow-md active:scale-[0.99]"
        >
          <div className="flex items-center gap-4">
            <div
              className="h-12 w-12 shrink-0 rounded-full bg-cover bg-center ring-2 ring-primary/20"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEd-cWRblAc7msWO32shdopLlBc29D2L9UFznPnjit0nYaoYS4geNNsf5qaRIrQK9xuJpPMUHZ4fFLJtkSKCt0ctuk9IAUnElzYRcOE7TKwyIE7yRuiHk1y-lKhUviWZOmR_JUaZ7lHT_N6PRX1OVGEVRFtFJx3gDbZCy8YhHJQyd37JyBVFJO1DOLvubSvemNHn_QpsszCACVpIlVYngQy11tJ1Ezxli48Hfvomr5_TU-jBbAYvqnRxzqFzW4xKA6Dn6Up0r1pgQ")',
              }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-base font-semibold leading-tight text-slate-900 dark:text-white">
                Mario Rossi
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-xs font-medium text-slate-500 dark:text-gray-400">
                  Bodybuilding
                </span>
                <span className="text-[10px] text-slate-300 dark:text-gray-600">•</span>
                <span className="text-xs font-medium text-slate-500 dark:text-gray-400">
                  Entrato 2h fa
                </span>
              </div>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-1">
            <div className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-bold text-green-600 dark:text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
              Regolare
            </div>
          </div>
        </div>

        <div className="group relative flex items-center justify-between gap-4 rounded-xl bg-white dark:bg-surface-dark p-3 shadow-sm transition-all hover:shadow-md active:scale-[0.99]">
          <div className="flex items-center gap-4">
            <div
              className="h-12 w-12 shrink-0 rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnh0qtRRFILZBbMLW6zgSGLN9538e45nhRC6l6zOT5ONeZmMe9W9iD1Mw9KvOQR3CwidYrqpoNEUILesyWHwtwMD642cHGUG7edNWZXBlkAbcMQ19i5hcvkM7nTjxGCLQSxFe-1mbb0ftrBpOR-XKJmZaqmt6QAzTqD7GkQnXi4jO-XWVBKEL_Kf5JPgo9_5myqaBUi6-IkHTymRrV7KmhQdl3eiXqoGeKDvcCO4-ayGUwRZSgeOjzQ7qY2wkaE_DaS5DLuMnx6FQ")',
              }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-base font-semibold leading-tight text-slate-900 dark:text-white">
                Luigi Verdi
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-xs font-medium text-slate-500 dark:text-gray-400">
                  Cardio
                </span>
                <span className="text-[10px] text-slate-300 dark:text-gray-600">•</span>
                <span className="text-xs font-medium text-slate-500 dark:text-gray-400">
                  Assente da 3gg
                </span>
              </div>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-1">
            <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs font-bold text-yellow-600 dark:text-yellow-400">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
              Scade tra 2gg
            </div>
          </div>
        </div>

        <div className="py-2 mt-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-500">
            Ieri
          </h3>
        </div>

        <div className="group relative flex items-center justify-between gap-4 rounded-xl bg-white dark:bg-surface-dark p-3 shadow-sm transition-all hover:shadow-md active:scale-[0.99]">
          <div className="flex items-center gap-4">
            <div
              className="h-12 w-12 shrink-0 rounded-full bg-cover bg-center grayscale"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMCRIBVXOsUUeT28pAzIAV2QC1-sbJrSpggy_NbR1ahyCt1t9X0VyNeuE5f63GnQ1JnNEbHJvGtnD9uXOD_RFM9gtfbA7MpBuDmV6JXAxlAb_qyEy5kHx4ahhKCk29mp3cGbMZ1-n755sD_w-MKoKqDhz5pJ17xlN8q7es-IZFuuvb5QH_1eMkQAEkJ8KuNhP3XfELMwvUpLdN1_mHELV0Y0Acoh-CWNa3MbNnxb4FBsSrBKf0GGcI9KYNEOndavKZTc8RsUhQdvU")',
              }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-base font-semibold leading-tight text-slate-900 dark:text-white opacity-60">
                Giulia Bianchi
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-xs font-medium text-slate-500 dark:text-gray-400">
                  Crossfit
                </span>
                <span className="text-[10px] text-slate-300 dark:text-gray-600">•</span>
                <span className="text-xs font-medium text-slate-500 dark:text-gray-400">
                  Inattiva
                </span>
              </div>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-1">
            <div className="flex items-center gap-1 rounded-full bg-red-500/10 px-2 py-0.5 text-xs font-bold text-red-600 dark:text-red-400">
              <span className="material-symbols-outlined text-[14px]">error</span>
              Scaduto
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ClientListScreen;