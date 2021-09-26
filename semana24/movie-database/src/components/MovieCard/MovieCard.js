import React from "react";
import { useHistory } from "react-router";
import { goToDetails } from "../../routes/coordinator";
import { Card, MovieImg, TextContainer } from "./styled";


const MovieCard = (props) => {
  const history = useHistory()
  const { movies } = props

  return (
    <>
      {
        movies.results && movies.results.map((movie) => {
          return <Card key={movie.title} onClick={()=>goToDetails(history, movie.id)}>
            <MovieImg style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})` }}>
              <TextContainer>
                <h3>{movie.title}</h3>
              </TextContainer>
            </MovieImg>
          </Card>
        })
      }
    </>
  );
}

export default MovieCard;
