import axios from "axios";
import { BASE_URL } from "../constants/urls";


const header = {
    headers: {
        Authorization: localStorage.getItem("token")
    }
}

export const getPosts = (setPosts) => {
    axios.get(`${BASE_URL}/posts`, header)
        .then((res) => {
            setPosts(res.data)
            
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const createPost = (body, cleanFields, setPosts) => {
    axios.post(`${BASE_URL}/posts`, body, header)
    .then((res)=>{
        alert(res.data)
        cleanFields()
        getPosts(setPosts)
        
    })
    .catch((err)=>{
        alert(err.response.data)
    })
}

export const createComment = (body, cleanFields, getComments, id) => {
    axios.post(`${BASE_URL}/posts/${id && id}/comments`, body, header)
    .then((res)=>{
        cleanFields()
        getComments()
    })
    .catch((err)=>{
        alert(err.response.data)
    })
}


