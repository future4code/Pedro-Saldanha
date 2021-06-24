import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ScreenContainer } from "../../constants/styled";
import PostCard from "./PostCard";
import CreatePostCard from "./CreatePostCard";
import { getPosts } from "../../services/post";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

const FeedPage = () => {
    useProtectedPage()
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        getPosts(setPosts)
    }, [])

    return (
        <ScreenContainer>
            <CreatePostCard posts={posts} setPosts={setPosts} />
            <PostCard posts={posts} />
        </ScreenContainer>
    )
}

export default FeedPage;
