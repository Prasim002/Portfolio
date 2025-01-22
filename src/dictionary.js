import React, {useState, useEffect} from 'react';
import './dictionary.css';
function Dictionary()
{
    const [word, setWord] = useState("");
    const [data, setData] = useState(null);
    console.log('Hello!');
    async function fetchWord() {
        console.log('button clicked!');
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const result = await response.json();
        setData(result[0]);
    }
    return(
        <>
        <div>
        <input className='words' placeholder='Enter word' value={word} onChange={(e)=> setWord(e.target.value)}></input>
        <button className='button' onClick={fetchWord}>Search</button>
        </div>
        <h1>Results</h1>
        {data ? (
  <div className='maintext'>
    <p><strong>Word:</strong> {data.word}</p>
    <p><strong>Phonetic:</strong> {data.phonetic || "N/A"}</p>
    {data.meanings && data.meanings.length > 0 && ( 
            <div>
                <p><strong>Parts of speech:</strong> {data.meanings[0].partOfSpeech}</p>
                {data.meanings[0].definitions && data.meanings[0].definitions.length > 0 && (
                <div>
                  <p><strong>Definition:</strong> {data.meanings[0].definitions[0].definition}</p>
                </div>
              )}
            </div>
        )}

  </div>
) : (
  <p className='extra'>No results to display.</p>
)}     
<div className='space'></div>
        </>
    )
}
export default Dictionary;