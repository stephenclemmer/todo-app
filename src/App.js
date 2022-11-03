import React from 'react';
import ToDo from './Components/ToDo';
import {Route, Routes} from "react-router-dom";
import Settings from "../src/Settings/settings";
import Header from "../src/Components/Header/header";
import Footer from "../src/Components/Footer/footer";
// import Auth2 from "../src/Auth2";


export default class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Routes>
        <Route path="/" element={ <ToDo />}/>
        <Route path="/settings" element={ <Settings />}/>
      </Routes>
      <Footer />
      </>
    );
  }
}
