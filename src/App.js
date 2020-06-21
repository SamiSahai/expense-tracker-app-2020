import React from 'react';

// Import Components
import { Header } from './Components/Header';
import {Balance} from './Components/Balance';
import {AccountSummary} from './Components/AccountSummary';
import {TransactionHistory} from './Components/TransactionHistory';
import {AddTransaction} from './Components/AddTransaction';
import './App.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />

      </div>
    </GlobalProvider>
  );
}

export default App;
