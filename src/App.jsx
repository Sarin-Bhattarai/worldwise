import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Page404 from "./pages/Page404";
import Pricing from "./pages/Pricing";
import ProtectedRoute from "./pages/ProtectedRoute";
import AppLayout from "./pages/AppLayout";
import City from "./components/Extras/City";
import Form from "./components/Extras/Form";
import CityList from "./components/Extras/CityList";
import { AuthProvider } from "./contexts/AuthContext";
import CountryList from "./components/Extras/CountryList";
import { CitiesProvider } from "./contexts/CitiesContext";

function App() {
  return (
    //providing contexts for all the routes and making it global
    <AuthProvider>
      <CitiesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              {/* index route */}
              <Route index element={<Navigate replace to="cities" />} />
              {/* Nested Routes */}
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            {/* Route for undefined urls */}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Router>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
