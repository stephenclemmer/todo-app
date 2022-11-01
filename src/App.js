import React from 'react';
import Header from '../src/Components/Header/header'
import Footer from '../src/Components/Footer/footer'
import ToDo from './Components/ToDo';

export default class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <ToDo />
      <Footer />
      </>
    );
  }
}
