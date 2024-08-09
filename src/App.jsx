import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/AuthContext";

import City from "./components/Extras/City";
import Form from "./components/Extras/Form";
import CityList from "./components/Extras/CityList";
import SpinnerFullPage from "./components/Extras/SpinnerFullPage";
import CountryList from "./components/Extras/CountryList";
//Lazy loading for reducing bundle size.
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Product = lazy(() => import("./pages/Product"));
const Page404 = lazy(() => import("./pages/Page404"));
const Pricing = lazy(() => import("./pages/Pricing"));
const AppLayout = lazy(() => import("./pages/AppLayout"));

function App() {
  return (
    //providing contexts for all the routes and making it global
    <AuthProvider>
      <CitiesProvider>
        <Router>
          {/* <Suspense> lets you display a fallback until its children have finished loading. */}
          <Suspense fallback={<SpinnerFullPage />}>
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
          </Suspense>
        </Router>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
