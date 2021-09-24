import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import MovieCard from "../../components/MovieCard/MovieCard";
import GlobalStateContext from "../../global/GlobalStateContext";


const HomePage = () => {
  const { movies } = useContext(GlobalStateContext)

  return (
    <div>
      <Header />
      <MovieCard />
      <div>
        {
          movies.results && movies.results.map((movie) => {
            return <p key={movie.title}>{movie.title}</p>
          })
        }
      </div>
    </div>
  );
}

export default HomePage;
