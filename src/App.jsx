import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Welcome from "./pages/Welcome";

import Dashboard from "./pages/Dashboard";
import Pets from "./pages/Pets";
import PetDetails from "./pages/PetDetails";
import Supplies from "./pages/Supplies";
import Services from "./pages/Services";
import Appointments from "./pages/Appointments";
import HealthTracker from "./pages/HealthTracker";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =================================
            WELCOME PAGE
        ================================= */}

        <Route
          path="/"
          element={<Welcome />}
        />


        {/* =================================
            DASHBOARD APPLICATION
        ================================= */}

        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />


        {/* =================================
            PETS
        ================================= */}

        <Route
          path="/pets"
          element={
            <DashboardLayout>
              <Pets />
            </DashboardLayout>
          }
        />


        {/* =================================
            PET DETAILS
        ================================= */}

        <Route
          path="/pet-details"
          element={
            <DashboardLayout>
              <PetDetails />
            </DashboardLayout>
          }
        />


        {/* =================================
            SUPPLIES
        ================================= */}

        <Route
          path="/supplies"
          element={
            <DashboardLayout>
              <Supplies />
            </DashboardLayout>
          }
        />


        {/* =================================
            VETERINARY SERVICES
        ================================= */}

        <Route
          path="/services"
          element={
            <DashboardLayout>
              <Services />
            </DashboardLayout>
          }
        />


        {/* =================================
            APPOINTMENTS
        ================================= */}

        <Route
          path="/appointments"
          element={
            <DashboardLayout>
              <Appointments />
            </DashboardLayout>
          }
        />


        {/* =================================
            HEALTH TRACKER
        ================================= */}

        <Route
          path="/health"
          element={
            <DashboardLayout>
              <HealthTracker />
            </DashboardLayout>
          }
        />


        {/* =================================
            CART
        ================================= */}

        <Route
          path="/cart"
          element={
            <DashboardLayout>
              <Cart />
            </DashboardLayout>
          }
        />


        {/* =================================
            PROFILE
        ================================= */}

        <Route
          path="/profile"
          element={
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;