import React, { Component } from 'react';
import NavBrand from "../../../Components/NavBar/NavBrand";
import Nav from "../../../Components/NavBar/Nav";
import NavBody from "../../../Components/NavBar/NavBody";
import NavSearch from "../../../Components/NavBar/NavSearch";
import NavList from "../../../Components/NavBar/NavList";
import NavItem from "../../../Components/NavBar/NavItem";
import NavDropdown from "../../../Components/NavBar/NavDropdown";
import NavDropItem from "../../../Components/NavBar/NavDropItem";
import ModalAction from "../../../Components/Modal/ModalAction";
import ModalMessage from "../../../Components/Modal/ModalMessage";
import ModalBody from "../../../Components/Modal/ModalBody";
import Produtos from '../Carrosseis/Produtos';

class MainNavbar extends Component {
    render() 
    { 
        return (
            <div className="sticky-top">
                <Nav c="bg-luxury my-0">
                    <NavBrand title="SuperShoes" ocultId="DivOculta"/>
                    <NavBody ocultId="DivOculta">
                        <NavSearch size="70">O que você está procurando?</NavSearch>
                        <NavList>
                            <NavItem titulo="Lista de Desejos" icone="far fa-heart"/>
                            <NavDropdown icone="fas fa-user" titulo="Entrar">
                                <NavDropItem titulo="Login"/>
                                <NavDropItem titulo="Meus Pedidos"/>
                                <NavDropItem titulo="Endereço"/>
                            </NavDropdown>
                            <NavDropdown icone="fas fa-shopping-cart">
                                <NavDropItem tipo="texto">Seu carrinho está vazio</NavDropItem>
                            </NavDropdown>
                            <span className="badge badge-pill badge-danger h-25">27</span>
                        </NavList>
                    </NavBody>
                </Nav>
            </div>
        );
    }
}

export default MainNavbar;