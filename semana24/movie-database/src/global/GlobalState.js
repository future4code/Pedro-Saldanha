import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios"
import { LANGUAGE } from "../constants/language";


const GlobalState = (props) => {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState("")
    const [currentGenre, setCurrentGenre] = useState("")

    useEffect(() => {
        setCurrentPage("1")
        getMovies()
    }, [])

    useEffect(() => {
        getMovies()
    }, [currentPage, currentGenre])

    const getMovies = () => {
        axios.get(currentGenre ? `${BASE_URL}/popular?api_key=${process.env.REACT_APP_API_KEY}&${LANGUAGE}&page=${currentPage}&with_genres=${currentGenre}` : `${BASE_URL}/popular?api_key=${process.env.REACT_APP_API_KEY}&${LANGUAGE}&page=${currentPage}`)
            .then((res) => {
                setMovies(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const data = { movies, setMovies, currentPage, setCurrentPage, currentGenre, setCurrentGenre }


    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalState;
