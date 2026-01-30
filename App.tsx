import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import DashboardScreen from './screens/DashboardScreen';
import ClientListScreen from './screens/ClientListScreen';
import ClientDetailsScreen from './screens/ClientDetailsScreen';
import ProgressScreen from './screens/ProgressScreen';
import AddProgressScreen from './screens/AddProgressScreen';
import PaymentScreen from './screens/PaymentScreen';
import AddClientScreen from './screens/AddClientScreen';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DashboardScreen />} />
        <Route path="/clients" element={<ClientListScreen />} />
        <Route path="/details" element={<ClientDetailsScreen />} />
        <Route path="/progress" element={<ProgressScreen />} />
        <Route path="/add-progress" element={<AddProgressScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/add-client" element={<AddClientScreen />} />
      </Routes>
    </HashRouter>
  );
};

export default App;