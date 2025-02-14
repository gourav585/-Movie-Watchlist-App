import React, { useEffect, useState } from "react";
import Nevbar from "./component/Nevbar";
import Movies from "./component/Movies";
import Watchlist from "./component/Watchlist";
import Banner from "./component/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  const handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem('moviesApp',JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  };

  const handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => movie.id !== movieObj.id);
    setWatchlist(filteredWatchlist);
  };
  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (moviesFromLocalStorage) {
      setWatchlist(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  return (
    <BrowserRouter>
      <Nevbar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Movies 
              watchlist={watchlist} 
              handleAddToWatchlist={handleAddToWatchlist} 
              handleRemoveFromWatchlist={handleRemoveFromWatchlist} 
            />
          </>
        }/>
        <Route path="/watchlist" element={
          <Watchlist 
            watchlist={watchlist} 
            handleRemoveFromWatchlist={handleRemoveFromWatchlist} 
            setWatchlist={setWatchlist}
          />
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
