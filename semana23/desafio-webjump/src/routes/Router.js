import React from "react"
import HomePage from "../pages/HomePage/HomePage"
import PantsPage from "../pages/PantsPage/PantsPage"
import ShirtsPage from "../pages/ShirtsPage/ShirtsPage"
import ShoesPage from "../pages/ShoesPage/ShoesPage"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "../components/Header/Header"

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/sapato">
                    <ShoesPage />
                </Route>
                <Route exact path="/camiseta">
                    <ShirtsPage />
                </Route>
                <Route exact path="/calca">
                    <PantsPage />
                </Route>
                <Route>
                    <div>Erro 404</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router