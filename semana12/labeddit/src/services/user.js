import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";


export const login = (body, cleanFields, history) => {

    axios.post(`${BASE_URL}/users/login`, body).then((res) => {
        localStorage.setItem("token", res.data.token)
        cleanFields()
        goToFeed(history)
    }).catch((err) => {
        alert(err.response.data)
        cleanFields()
    })
}

export const signUp = (body, cleanFields, history) => {
    
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
        console.log(res.data.token)
        cleanFields()
        goToFeed(history)
    })
    .catch((err) => {
        alert(err.response.data)
        cleanFields()
    })


}