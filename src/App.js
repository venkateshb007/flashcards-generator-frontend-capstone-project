import Createflashcard from "./components/Createflashcard";
import Mycards from "./components/Mycards";
import Navbar from "./components/Navbar";
import Viewcard from "./components/Viewcard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {getMyflashCards} from './service/Localstorage.js'
import { useState, useEffect } from "react";

function App() {
  const [data, setData]= useState([])
  
  useEffect(()=>{
    setData(getMyflashCards())
  },[])


  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Createflashcard />} />

          <Route path="/mycards"   element={<Mycards />} />
          <Route path="/view-card/details/:id"  element={<Viewcard data={data}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
