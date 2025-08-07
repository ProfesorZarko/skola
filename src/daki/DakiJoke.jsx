import React from 'react'
const apiKey = import.meta.env.VITE_API_NINJAS_KEY;


export default function DakiJoke() {
    const [joke, setJoke] = React.useState([{text:""}]);
    const handleClick = async () => {

        try {
            const response = await fetch('https://api.api-ninjas.com/v1/dadjokes', {
                headers: {
                    'X-Api-Key': apiKey}
            });
            if (!response.ok) throw new Error('Greška pri preuzimanju šale');

            const data = await response.json();
            setJoke(data[0]?.joke  || {text: 'Nema vica za prikaz 😅'});
        } catch (error) {
            setJoke([{text: 'Došlo je do greške: ' + error.message, id: '', author: ''}]);
        }
    };
  return (
    <div>DakiJoke
        ovo je DakiJoke
        <button onClick={handleClick} style={{padding: '0.5rem 1rem', fontSize: '1rem'}}>
            Pokaži šalu
        </button>
        {joke.map((j, index) => (
            <div key={index} style={{marginTop: '1rem', fontStyle: 'italic'}}>
                {j.text} <br />
                <span style={{fontSize: '0.8rem', color: 'gray'}}>
                    {j.author ? `Autor: ${j.author}` : 'Autor nepoznat'}
                </span>    
                </div>
        ))}
    </div>
  )
}
