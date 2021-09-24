import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MovieDetails from "../pages/MovieDetails/MovieDetails";

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/movie/:id">
                    <MovieDetails />
                </Route>
                <Route>
                    <p>erro</p>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}