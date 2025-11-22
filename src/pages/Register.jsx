import React, { useState } from 'react';
import { post } from '../services/api';

export default function Register({ onRegister }) {
  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');

  async function submit(e){
    e.preventDefault();
    const r = await post('/api/auth/register', { email, name, password });
    if (r.token) onRegister(r.token);
    else alert(r.error || 'error');
  }

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" /><br/>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="name" /><br/>
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" /><br/>
      <button type="submit">Register</button>
    </form>
  );
}
