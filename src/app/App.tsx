import React from "react";
import "./App.scss";
// import ItemCard from "widgets/ItemCard";
// import { SectionHeader } from "widgets/SectionHeader/SectionHeader";
// import OfferCard from "widgets/OfferCard/OfferCard";

// import banner1 from "assets/mocks/banner1.png";
// import banner1_2x from "assets/mocks/banner1@2x.png";
// import banner1_3x from "assets/mocks/banner1@3x.png";

// const banner1Img = {
//   src: banner1,
//   srcSet: `${banner1} 1x, ${banner1_2x} 2x, ${banner1_3x} 3x`,
// };

import article1Img from "assets/mocks/article1.png";
import article1Img_2x from "assets/mocks/article1@2x.png";
import article1Img_3x from "assets/mocks/article1@3x.png";
import ArticleCard from "widgets/ArticleCard/ArticleCard";
import Map, { PointType } from "widgets/Map/Map";
import Header from "widgets/Header/Header";
import Footer from "widgets/Footer/Footer";
import ItemCard from "widgets/ItemCard";
import Main from "pages/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "pages/wrapper/Wrapper";
import Catalog from "pages/catalog/Catalog";





function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Wrapper />} >
        <Route index element={<Main/>} />
        <Route path="catalog" element={<Catalog/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
