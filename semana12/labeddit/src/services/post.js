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
            alert(err.response)
        })
}

export const createPost = (body, cleanFields, setPosts) => {
    axios.post(`${BASE_URL}/posts`, body, header)
        .then((res) => {
            alert(res.data)
            cleanFields()
            getPosts(setPosts)

        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const getComments = (id, setComments) => {
    axios.get(`${BASE_URL}/posts/${id}/comments`, header)
        .then((res) => {
            setComments(res.data)
        })
        .catch((err) => {
            alert(err.response)
        })
}

export const createComment = (body, cleanFields, id, setComments) => {
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, header)
        .then(() => {
            cleanFields()
            getComments(id, setComments)
        })
        .catch((err) => {
            alert(err.response.data)
        })
}



export const upvotePost = (id, userVote, setPosts) => {
    if (userVote === null) {

        axios.post(`${BASE_URL}/posts/${id}/votes`, { direction: 1 }, header)
            .then(() => {
                getPosts(setPosts)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    } else if (userVote === 1 || userVote === -1) {
        axios.delete(`${BASE_URL}/posts/${id}/votes`, header)
            .then(() => {
                getPosts(setPosts)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

}

export const downvotePost = (id, userVote, setPosts) => {
    if (userVote === null) {

        axios.put(`${BASE_URL}/posts/${id}/votes`, { direction: -1 }, header)
            .then(() => {
                getPosts(setPosts)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    } else if (userVote === -1 || userVote === 1) {
        axios.delete(`${BASE_URL}/posts/${id}/votes`, header)
            .then(() => {
                getPosts(setPosts)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

}


export const upvoteComment = (commentId, userVote, comments) => {
    if (userVote === null) {

        axios.post(`${BASE_URL}/comments/${commentId}/votes`, { direction: 1 }, header)
            .then(() => {
                comments()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    } else if (userVote === 1 || userVote === -1) {
        axios.delete(`${BASE_URL}/comments/${commentId}/votes`, header)
            .then(() => {
                comments()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

}

export const downvoteComment = (commentId, userVote, comments) => {
    if (userVote === null) {

        axios.put(`${BASE_URL}/comments/${commentId}/votes`, { direction: -1 }, header)
            .then(() => {
                comments()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    } else if (userVote === -1 || userVote === 1) {
        axios.delete(`${BASE_URL}/comments/${commentId}/votes`, header)
            .then(() => {
                comments()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

}