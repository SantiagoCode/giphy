import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import getGifs from "./services/fetch";
import Gif from "./components/Gif";

function App() {
  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState([""]);

  useEffect(
    function () {
      getGifs(keyword).then((newGifs) => setGifs(newGifs));
      console.log("renderizado");
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
          className="App-input"
          type="text"
          name="search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <div className="App-container">
          {gifs.map((gif) => (
            <Gif key={gif.id} title={gif.title} id={gif.id} url={gif.url} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
