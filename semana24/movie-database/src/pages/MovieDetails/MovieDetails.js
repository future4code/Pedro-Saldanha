import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, MovieImg } from "./styled";
import { API_KEY } from "../../constants/apiKey";
import { LANGUAGE } from "../../constants/language";
import { BASE_URL } from "../../constants/urls";
import { MainContainer, TextContainer } from "./styled";


const MovieDetails = () => {
  const [movie, setMovie] = useState({})
  const { id } = useParams()

  const getMovieDetails = () => {
    axios.get(`${BASE_URL}/${id}?api_key=${API_KEY}&${LANGUAGE}`)
      .then((res) => {
        setMovie(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getMovieDetails()
  }, [])

  const formatDate = (date) => {
    return date.split("-").reverse().join("/")
  }

  const formatedDate = movie && movie.release_date && formatDate(movie.release_date)


  console.log(movie)
  return (
    <MainContainer>
      <Card key={movie && movie.title}>
        <MovieImg style={movie && movie.title && { backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})` }} />
      </Card>
      <TextContainer>
        <h1>{movie.title}</h1>
        <h3>{movie.tagline}</h3>
        <h5>Título original: {movie.original_title}</h5>
        <h4>{movie.overview}</h4>
        <h5>Data de lançamento: {formatedDate}</h5>
      </TextContainer>
    </MainContainer>
  );
}

export default MovieDetails;
