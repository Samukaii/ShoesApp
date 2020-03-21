import React, { Component } from 'react';
import './App.css';
import MainNavbar from "./Site/Componentes/NavBars/MainNavbar"
import MainFooter from './Site/Componentes/Footer/MainFooter';
import NavbarTop from './Site/Componentes/NavBars/NavbarTop';
import NavBarCategorias from './Site/Componentes/NavBars/NavBarCategorias';

class App extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <NavbarTop/>
        <MainNavbar/>
        <NavBarCategorias/>
        {this.props.children}
        <MainFooter/>
      </div>
    );
  }
}

export default App;
