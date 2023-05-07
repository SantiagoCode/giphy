import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import getGifs from "./services/fetch.js";

function App() {
  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState([""]);

  useEffect(
    function () {
      getGifs(keyword).then((newGifs) => setGifs(newGifs));
    },
    [keyword]
  );

  return (
    <div className="App">
      <section className="App-content">
        <h1>Giphy</h1>

        <label for="search">Buscar:</label>
        <input
          id="search"
          type="text"
          name="search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <div className="App-container">
          {gifs.map((gif) => {
            return (
              <div>
                <h4>{gif.title}</h4>
                <img src={gif.url} alt={gif.title} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
