import {show} from './services/starwars';
import { useState, useEffect } from 'react';
import Search from './components/Search';
import Show from './components/Show';
import './App.css';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await show();
      setStarships(data.results);
      setFiltered(data.results);
    };
    fetchStarships(); 
     }, []);

  const handleSearch = (query) => {
    const searchResult = starships.filter((s) =>
      s.name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(searchResult);
    console.log(filtered);
  };

  return (
    <main>
      <h1>Star Wars API</h1>
      <Search onSearch={handleSearch} />
      <Show filtered={filtered}></Show>
    
      
    </main>
  );
};

export default App;