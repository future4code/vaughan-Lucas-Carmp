import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import NoLogoutHeader from "./components/header/NoLogoutHeader";
import { BASE_URL } from "./constants/base-url";
import AdminHomePage from "./pages/admin-home-page/AdminHomePage";
import ApplicationFormPage from "./pages/application-form-page/ApplicationFormPage";
import CreateTripsPage from "./pages/create-trip-page/CreateTripPage";
import HomePage from "./pages/home-page/HomePage";
import ListTripsPage from "./pages/list-trips-page/ListTripsPage";
import LoginPage from "./pages/login-page/LoginPage";
import TripDetailsPage from "./pages/trip-details.page/TripDetailsPage";

export const useProtectPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null){
      navigate('/login');
    }
  }, [])
};

function App() {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState();

  const getTrips = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/trips`);
      setTrips(response.data.trips);
    } catch (err) {
      alert(
        "Something bad happened. Contact the developers for further information."
      );
    }
  };

  useEffect(() => {
    getTrips();
  }, [trips]);

  return (
    <BrowserRouter>
      <div className="App">
        <NoLogoutHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trips/list" element={<ListTripsPage trips={trips} />} />
          <Route
            path="/trips/application"
            element={<ApplicationFormPage trips={trips} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin/trips/list"
            element={
              <AdminHomePage
                trips={trips}
                setTrip={setSelectedTrip}
                thisTrip={selectedTrip}
              />
            }
          />
          <Route
            path="/admin/trips/:id"
            element={<TripDetailsPage thisTrip={selectedTrip} />}
          />
          <Route path="/admin/trips/create" element={<CreateTripsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
