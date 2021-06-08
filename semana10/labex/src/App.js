import React from 'react';
import AdminHome from './pages/AdminHomePage';
import ApplicationForm from './pages/ApplicationFormPage';
import CreateTrip from './pages/CreateTripPage';
import Home from './pages/HomePage';
import ListTrips from './pages/ListTripsPage';
import Login from './pages/LoginPage';
import TripDetails from './pages/TripDetailsPage';


function App() {
  return (
    <div className="App">
      <Home />
      <AdminHome />
      <ApplicationForm />
      <CreateTrip />
      <ListTrips />
      <Login />
      <TripDetails />
    </div>
  );
}

export default App;
