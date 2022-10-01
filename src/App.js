import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/header/Header'
import Home from "./Components/pages/Home";
import Menu from "./Components/pages/Menu";
import Gallery from "./Components/pages/Gallery";
import Reservation from "./Components/pages/Reservation";
import Contact from "./Components/pages/Contact";
import Pizza from "./Components/pages/Pizza";
import Salads from "./Components/pages/Salads";
import Soups from "./Components/pages/Soups";
import Desserts from "./Components/pages/Desserts";
import Drinks from "./Components/pages/Drinks";
import Signup from "./Components/pages/Signup";
import Cart from "./Components/pages/Cart";
import Special from "./Components/pages/Special"


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />   
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/boxed" element={<Menu />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/reservation" element={<Reservation />}></Route>
          <Route path="/contactUs" element={<Contact/>}></Route>
          <Route path="/pizza" element={<Pizza />}></Route>
          <Route path="/salads" element={<Salads />}></Route>
          <Route path="/soups" element={<Soups />}></Route>
          <Route path="/desserts" element={<Desserts />}></Route>
          <Route path="/drinks" element={<Drinks />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/special" element={<Special />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// http://preview.themeforest.net/item/cristiano-restaurant-wordpress-woocommerce-theme/full_screen_preview/17392139?_ga=2.142153659.825234749.1663410327-53095604.1663410327&_gac=1.19074572.1663410327.EAIaIQobChMI2Jv-o86b-gIVWAwrCh1KBAQ1EAAYAiAAEgIooPD_BwE
