import React, { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Pets from './pages/Pets';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [view, setView] = useState(token ? 'pets' : 'login');

  return (
    <div style={{ padding: 20 }}>
      <h1>Pets Tracker - Local</h1>
      <nav>
        {!token && <button onClick={() => setView('login')}>Login</button>}
        {!token && <button onClick={() => setView('register')}>Register</button>}
        {token && <button onClick={() => { localStorage.removeItem('token'); setToken(null); setView('login'); }}>Logout</button>}
      </nav>
      {view === 'login' && <Login onLogin={(t) => { setToken(t); localStorage.setItem('token', t); setView('pets'); }} />}
      {view === 'register' && <Register onRegister={(t) => { setToken(t); localStorage.setItem('token', t); setView('pets'); }} />}
      {view === 'pets' && <Pets token={token} />}
    </div>
  );
}
