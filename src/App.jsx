import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Page404 from "./pages/Page404";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          {/* index route */}
          <Route index element={<p>City</p>} />
          {/* Nested Routes */}
          <Route path="cities" element={<p>Cities</p>} />
          <Route path="countries" element={<p>Countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
