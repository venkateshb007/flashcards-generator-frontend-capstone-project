
import Createflashcard from "./components/createflashcard/Createflashcard.js";
import Mycards from "./components/mycards/Mycards.js";
import Navbar from "./components/navbar/Navbar.js";
import Viewcard from "./components/viewcard/Viewcard.js";


import { HashRouter, Route, Routes } from "react-router-dom";
import {getMyflashCards} from './service/Localstorage.js'
import { useState, useEffect } from "react";

function App() {
  const [data, setData]= useState([])
  
  useEffect(()=>{
    setData(getMyflashCards())
  },[])


  return (
    <>
      <HashRouter >
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Createflashcard />} />

          <Route path="/mycards"   element={<Mycards />} />
          <Route path="/view-card/details/:id"  element={<Viewcard data={data}/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
