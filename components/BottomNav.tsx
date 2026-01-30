import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path === '/clients' && (location.pathname === '/clients' || location.pathname === '/details' || location.pathname === '/progress')) return true;
    return false;
  };

  const activeColor = "text-primary";
  const inactiveColor = "text-slate-400 dark:text-slate-500";

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background-light/90 dark:bg-[#060102]/90 backdrop-blur-lg border-t border-slate-200 dark:border-white/5 pb-5 pt-3 px-6">
      <ul className="flex justify-between items-end max-w-md mx-auto">
        
        {/* Home Button (Left) */}
        <li className="flex-1 flex justify-center">
          <Link
            to="/"
            className={`flex flex-col items-center gap-1 group w-16 ${
              isActive('/') ? activeColor : inactiveColor
            }`}
          >
            <span
              className={`material-symbols-outlined transition-transform group-hover:scale-110 ${
                isActive('/') ? 'filled' : ''
              }`}
            >
              dashboard
            </span>
            <span className="text-[10px] font-medium">Home</span>
          </Link>
        </li>

        {/* Add Client Button (Center) */}
        <li className="flex-1 flex justify-center">
          <div className="relative -top-6">
            <Link
              to="/add-client"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-background-dark shadow-[0_4px_14px_0_rgba(255,95,0,0.39)] transition-transform hover:scale-105 active:scale-95"
            >
              <span className="material-symbols-outlined text-[28px]">add</span>
            </Link>
          </div>
        </li>

        {/* Clients Button (Right) */}
        <li className="flex-1 flex justify-center">
          <Link
            to="/clients"
            className={`flex flex-col items-center gap-1 group w-16 ${
              isActive('/clients') ? activeColor : inactiveColor
            }`}
          >
            <span className="material-symbols-outlined transition-colors">groups</span>
            <span className="text-[10px] font-medium">Clienti</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default BottomNav;