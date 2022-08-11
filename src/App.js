import React, { useEffect, useState } from "react";

import { getNews } from "./Service/getNews";

import NewsOutlet from "./Components/NewsOutlet";
import Header from "./Components/Header";


const App = () => {

  return (
  <>
   <Header />
    <NewsOutlet />
  </>
  );
};

export default App;
