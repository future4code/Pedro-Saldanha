import React, { useState, useEffect } from "react";
import { API_KEY } from "../constants/apiKey";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios"
import { LANGUAGE } from "../constants/language";


const GlobalState = (props) => {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState("")

    useEffect(() => {
        setCurrentPage("1")
        getMovies()
    }, [])

    useEffect(() => {
        getMovies()
    }, [currentPage])

    const getMovies = () => {
        axios.get(`${BASE_URL}/popular?api_key=${API_KEY}&${LANGUAGE}&page=${currentPage}`)
            .then((res) => {
                setMovies(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const data = { movies, setMovies, currentPage, setCurrentPage }


    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalState;
