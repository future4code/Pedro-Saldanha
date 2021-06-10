import React from 'react';
import { useHistory } from 'react-router';
import { goToAdminHome, goToListTrips } from '../routes/coordinator';



function Home() {
    const history = useHistory()
    return (
        <div>
            <h1>LabeX</h1>
            <div>
                <button onClick={() => goToListTrips(history)}>Viagens</button>
                <button onClick={() => goToAdminHome(history)}>Área de Admin</button>
            </div>
        </div>
    );
}

export default Home;