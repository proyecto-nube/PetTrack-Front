import React, { useEffect, useState } from 'react';
import { get, post } from '../services/api';

export default function Pets({ token }) {
  const [pets, setPets] = useState([]);
  const [name,setName] = useState('');

  async function load() {
    const r = await get('/api/pets', token);
    setPets(r);
  }

  useEffect(()=>{ load(); }, []);

  async function add(e){
    e.preventDefault();
    const r = await post('/api/pets', { name }, token);
    if (r.id) {
      setPets([r, ...pets]);
      setName('');
    } else alert(r.error || 'error');
  }

  return (
    <div>
      <h2>Mis Mascotas</h2>
      <form onSubmit={add}>
        <input placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)} />
        <button>Crear</button>
      </form>
      <ul>
        {pets.map(p => <li key={p.id}>{p.name} ({p.species||'--'})</li>)}
      </ul>
    </div>
  );
}
