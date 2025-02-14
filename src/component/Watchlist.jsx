import React, { useState } from "react";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import genresId from "../utility/Genre";

function Watchlist({ watchlist, handleRemoveFromWatchlist, setWatchlist }) {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortInc = () => {
    let sortedInc = [...watchlist].sort((a, b) => a.vote_average - b.vote_average);
    setWatchlist(sortedInc);
  };

  let sortDic = () => {
    let sortedDic = [...watchlist].sort((a, b) => b.vote_average - a.vote_average);
    setWatchlist(sortedDic);
  };

  let filteredMovies = watchlist.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()) &&
    (selectedGenre === "All" || movie.genre_ids.includes(parseInt(selectedGenre)))
  );

  return (
    <>
      {/* Genre Filters */}
      <div className="flex flex-wrap justify-center gap-3 my-5">
        <button
          className={`px-4 py-2 rounded-full text-white text-sm font-semibold transition-all duration-200 ${
            selectedGenre === "All" ? "bg-blue-600" : "bg-gray-600 hover:bg-blue-500"
          }`}
          onClick={() => setSelectedGenre("All")}
        >
          All Genre
        </button>

        {Object.entries(genresId).map(([id, name]) => (
          <button
            key={id}
            className={`px-4 py-2 rounded-full text-white text-sm font-semibold transition-all duration-200 ${
              selectedGenre === id ? "bg-blue-600" : "bg-gray-600 hover:bg-blue-500"
            }`}
            onClick={() => setSelectedGenre(id)}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex justify-center">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies..."
          className="w-[20rem] px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Movie Table */}
      <div className="overflow-x-auto mt-6 px-4">
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">
                <div className="flex items-center justify-center space-x-2">
                  <span>Rating</span>
                  <IoIosArrowRoundUp onClick={sortInc} className="cursor-pointer hover:text-blue-400 text-lg" />
                  <IoIosArrowRoundDown onClick={sortDic} className="cursor-pointer hover:text-blue-400 text-lg" />
                </div>
              </th>
              <th className="p-3">Popularity</th>
              <th className="p-3">Genre</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <tr key={movie.id} className="border-b hover:bg-gray-200 transition-all">
                  <td className="p-3 flex items-center">
                    <img className="h-20 w-14 rounded-lg shadow-md" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <span className="ml-4 font-medium">{movie.title}</span>
                  </td>
                  <td className="p-3 font-semibold">{movie.vote_average.toFixed(1)}</td>
                  <td className="p-3">{Math.round(movie.popularity)}</td>
                  <td className="p-3 text-sm text-gray-700">
                    {movie.genre_ids.map((id) => genresId[id] || "Unknown").join(", ")}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleRemoveFromWatchlist(movie)}
                      className="text-red-600 font-semibold hover:text-red-800 transition-all"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-6 text-center text-gray-500">
                  No movies found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
