import Hotel from "../customer/pages/hotel/Hotel";
import ReservationPage from "../customer/pages/reservation/ReservationPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext, useAuth } from "../context/AuthContext";
import AuthProvider from "../context/AuthContext";
import { useContext } from "react";


function AuthenticatedRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return children
  }
  return <Navigate to="/" />
}

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user !== null && user.userRole.name === "HOTEL") {
    return <Navigate to="/business/hotels" />;
  }
  return children;
};

function CustomerRouters() {
  return (
    <div>
      <AuthProvider>
        <ProtectedRoute>
          {/* <BrowserRouter> */}
          <Routes>
            <Route path="/hotels/:hotelId" element={<Hotel />} />
            <Route path="/hotels/:hotelId/reservation" element={<ReservationPage />} />
          </Routes>
          {/* </BrowserRouter> */}
        </ProtectedRoute>
      </AuthProvider>
    </div>
  )
}

export default CustomerRouters;