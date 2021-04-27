import './App.css'
import React, { useState } from 'react';
import Client from './components/Client';
import {v4 as uuidv4} from 'uuid'

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  function click(){  
   fetch(`/api/clients?search=${search}`)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => setData("szialajos"))
  }

  return (
    <div className="App">
     <h1>Veterinarian admin - clients</h1>

    <input type="text" onChange={(e) => setSearch(e.target.value)}/>
    <button disabled={search.length < 3 ? true : false} onClick={() => click()}>Kereses</button>

    { data && data.map(item => <Client key={uuidv4()} item={item} /> )}

    </div>
  )
}

export default App
