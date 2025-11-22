import React, { useState } from 'react';
import { post } from '../services/api';

export default function Login({ onLogin }) {
  const [email,setEmail]=useState('user@example.com');
  const [password,setPassword]=useState('123456');

  async function submit(e){
    e.preventDefault();
    const r = await post('/api/auth/login', { email, password });
    if (r.token) onLogin(r.token);
    else alert(r.error || 'error');
  }

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" /><br/>
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" /><br/>
      <button type="submit">Login</button>
    </form>
  );
}
