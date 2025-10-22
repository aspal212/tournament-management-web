import { useState } from 'react';

export default function CreateTournamentForm() {
  const [name, setName] = useState('');
  const [type, setType] = useState('single');
  const [participants, setParticipants] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, type, participants });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nama Turnamen"
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="single">Gugur (Single Elimination)</option>
        <option value="double">Gugur Ganda (Double Elimination)</option>
        <option value="round-robin">Round Robin</option>
      </select>
      <textarea
        value={participants}
        onChange={(e) => setParticipants(e.target.value)}
        placeholder="Daftar peserta (pisahkan dengan koma)"
      />
      <button type="submit">Buat Turnamen</button>
    </form>
  );
}
