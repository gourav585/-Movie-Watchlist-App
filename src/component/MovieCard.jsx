import React from "react";

function MovieCard({ movieObj, handleAddToWatchlist, handleRemoveFromWatchlist, watchlist }) {
  
  function isInWatchlist(movieObj) {
    return watchlist.some(movie => movie.id === movieObj.id);
  }

  return (
    <div className="h-[50vh] w-[11vw] bg-cover bg-center hover:scale-110 duration-300 rounded-2xl flex flex-col justify-between items-end" 
         style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieObj.poster_path})` }}>
      
      {isInWatchlist(movieObj) ? (
        <div onClick={() => handleRemoveFromWatchlist(movieObj)} 
             className="m-4 w-8 h-8 rounded-lg bg-gray-700/60 cursor-pointer flex justify-center items-center">
          &#10060;
        </div>
      ) : (
        <div onClick={() => handleAddToWatchlist(movieObj)} 
             className="m-4 w-8 h-8 rounded-lg bg-gray-700/60 cursor-pointer flex justify-center items-center">
          &#128525;
        </div>
      )}
      
      <div className="text-white w-full flex justify-center font-bold rounded-2xl bg-gray-900/60 p-2"> 
        {movieObj.title}
      </div>
    </div>
  );
}

export default MovieCard;
