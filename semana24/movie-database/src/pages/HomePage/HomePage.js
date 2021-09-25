import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import MovieCard from "../../components/MovieCard/MovieCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { CardsContainer } from "./styled";


const HomePage = () => {
  const { movies } = useContext(GlobalStateContext)

  return (
    <div>
      <Header />
      <CardsContainer>
        <MovieCard movies={movies} />
      </CardsContainer>
    </div>
  );
}

export default HomePage;
