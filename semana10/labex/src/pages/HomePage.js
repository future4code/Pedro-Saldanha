import React from 'react';
import { useHistory } from 'react-router';
import { goToListTrips, goToLogin } from '../routes/coordinator';



function Home() {
    const history = useHistory()
    return (
        <div>
            <p>Home</p>
            <div>
                <button onClick={() => goToListTrips(history)}>Viagens</button>
                <button onClick={() => goToLogin(history)}>Login</button>
            </div>
        </div>
    );
}

export default Home;