import React from 'react';
import { GlobalStyle } from './styles/Global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

export function App() {
  return (
    <>
      <Header />
      <Dashboard />

      <GlobalStyle />
    </>
  );
}

