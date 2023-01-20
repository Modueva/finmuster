import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/Router";
import Footer from './Components/Footer/Footer';
import Header from "./Components/Header/Header"
import "./Assets/Styles/style.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          {/* <Router/> */}
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
