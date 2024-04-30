import { useState } from "react";
import "./App.css";
import "./components/searchbar.css";
import "./components/SearchResultsList.css";
import { SearchBar } from "./components/searchbar";
import { SearchResultsList } from "./components/SearchResultsList";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results}/>
      </div>
    </div>
  );
}

export default App;
