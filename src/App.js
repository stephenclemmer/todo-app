import React from 'react';
import ToDo from './Components/ToDo';
import {Route, Routes} from "react-router-dom";
import Settings from "../src/Settings/settings";
import Header from "../src/Components/Header/header";
import Footer from "../src/Components/Footer/footer";



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
      {/* <h1 
      // className={classes.h1} data-testid="todo-h1"
      >To Do List: {incomplete} items pending</h1> */}

      </>
    );
  }
}
