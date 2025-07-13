import React, { useState } from 'react';
const apiKey = import.meta.env.VITE_API_NINJAS_KEY;

export default function MareJoke() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);
    setJoke('');

    try {
      const response = await fetch('https://api.api-ninjas.com/v1/dadjokes', {
        headers: {
          'X-Api-Key': apiKey,
        },
      });

      if (!response.ok) throw new Error('Greška pri preuzimanju šale');

      const data = await response.json();
      setJoke(data[0]?.joke || 'Nema vica za prikaz 😅');
    } catch (error) {
      setJoke('Došlo je do greške: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <button onClick={getJoke} disabled={loading} style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
        {loading ? 'Učitavanje...' : 'Pokaži šalu'}
      </button>
      {joke && <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>{joke}</p>}
    </div>
  );
}
