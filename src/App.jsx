import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./Pages/home/Home";
import Login from "./components/user-account/BannerLayout";
import PlaceToGo from "./Pages/place-to-go/PlaceToGo";
import { Provider } from "react-redux";
import trabelivStore from "./redux/Store";
import PlacesDetails from "./Pages/place-to-go/PlacesDetails";

const App = () => {
  return (
    <Provider store={trabelivStore}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/placestogo" element={<PlaceToGo />} />
            <Route exact path="/contactus" element={<Home />} />
            <Route exact path="/partnerprograme" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              path="/placestogo/description/:id"
              element={<PlacesDetails />}
            />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
