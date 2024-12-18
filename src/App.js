import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';

import './styles/reset.css';
import './styles/common.css';


export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/lists" Component={ListPage} />
      </Routes>
    </div>
  );
}