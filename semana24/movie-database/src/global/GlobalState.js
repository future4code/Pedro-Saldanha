import React, { useState, useEffect } from "react";
import { API_KEY } from "../constants/apiKey";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios"
import { LANGUAGE } from "../constants/language";


const GlobalState = (props) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = () => {
        axios.get(`${BASE_URL}/3/movie/popular?api_key=${API_KEY}&${LANGUAGE}`)
            .then((res) => {
                setMovies(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const data = { movies, setMovies }


    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalState;
