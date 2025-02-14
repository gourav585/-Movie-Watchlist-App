import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagechange from "./Pagechange";

function Movies({ handleAddToWatchlist, handleRemoveFromWatchlist, watchlist }) {
    const [movie, setMovie] = useState([]);
    const [pageNO, setPageNO] = useState(1);

    const handlePrev = () => {
        if (pageNO > 1) {
            setPageNO(pageNO - 1);
        }
    };

    const handleNext = () => {
        setPageNO(pageNO + 1);
    };

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6085cd6f3df689ad60e6f8b16a80c71c&language=en-US&page=${pageNO}`)
            .then((res) => {
                setMovie(res.data.results);
            });
    }, [pageNO]);

    return (
        <>
            <div className="text-center p-4 text-xl font-bold">Trending Movies</div>
            <div className="flex flex-row flex-wrap justify-around gap-5">
                {movie.map((movieObj) => (
                    <MovieCard 
                        key={movieObj.id} 
                        movieObj={movieObj} 
                        handleAddToWatchlist={handleAddToWatchlist} 
                        handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                        watchlist={watchlist}
                    />
                ))}
            </div>
            <Pagechange pageNO={pageNO} handlenext={handleNext} handleprev={handlePrev} />
        </>
    );
}

export default Movies;
