import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import NoLogoutHeader from "./components/header/NoLogoutHeader";

import AdminHomePage from "./pages/admin-home-page/AdminHomePage";
import ApplicationFormPage from "./pages/application-form-page/ApplicationFormPage";
import CreateTripsPage from "./pages/create-trip-page/CreateTripPage";
import HomePage from "./pages/home-page/HomePage";
import ListTripsPage from "./pages/list-trips-page/ListTripsPage";
import LoginPage from "./pages/login-page/LoginPage";
import TripDetailsPage from "./pages/trip-details.page/TripDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NoLogoutHeader />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/trips/list" element={<ListTripsPage/>} />
          <Route path="/trips/application" element={<ApplicationFormPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/admin/trips/list" element={<AdminHomePage/>} />
          <Route path="/admin/trips/:id" element={<TripDetailsPage/>} />
          <Route path="/admin/trips/create" element={<CreateTripsPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
