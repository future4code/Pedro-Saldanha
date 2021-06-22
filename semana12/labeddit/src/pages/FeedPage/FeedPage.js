import React from "react";
import Button from '@material-ui/core/Button';
import { useProtectedPage } from "../../hooks/useProtectedPage";

const FeedPage = () => {
    useProtectedPage()
    
    return (
        <div>
            <h1>FeedPage</h1>
            <Button variant="outlined" color="primary">
                Primary
            </Button>
        </div>
    )
}

export default FeedPage;
