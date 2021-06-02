import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Box from '@material-ui/core/Box';


function TelaMatches() {
    const [matches, setMatches] = useState([])

    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Header />
            <p>TelaMatches</p>
        </Box>
    );
}

export default TelaMatches;
