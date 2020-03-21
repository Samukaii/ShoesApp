import React, { Component } from 'react';
import ModalMessage from '../../../Components/Modal/ModalMessage';
import ModalBody from '../../../Components/Modal/ModalBody';
import Nav from '../../../Components/NavBar/Nav';
import NavItem from '../../../Components/NavBar/NavItem';
import NavList from '../../../Components/NavBar/NavList';
import ModalAction from '../../../Components/Modal/ModalAction';

class NavBarCategorias extends Component
{
    render()
    {
        return(
            <div>
                <Nav c="bg-light">
                    <NavList>
                        <ModalAction botao="Informe Seu Cep" idModal="Cep" cor="btn-outline-info"/>
                        <NavItem cortexto="text-dark" titulo="Ofertas"/>
                        <NavItem cortexto="text-dark" titulo="Cartão Presente"/>
                        <NavItem cortexto="text-dark" titulo="Cartão NCard"/>
                        <NavItem cortexto="text-dark" titulo="Baixe o App"/>
                        <NavItem cortexto="text-dark" titulo="Blog"/>
                        <NavItem cortexto="text-dark" titulo="Lançamentos"/>
                    </NavList>
                </Nav>

                <ModalMessage titulo="Informe seu Cep" idModal ="Cep">
                    <ModalBody>
                        Quer saber quais produtos possuem frete grátis na sua região?<br/>
                        É só colocar seu CEP:

                        <form className="form-group">
                            <input type="text" className="form-control my-3"/>
                            <button type="submit" className="btn btn-primary" data-dismiss="modal">Consultar</button>
                        </form>
                    </ModalBody>
                </ModalMessage>
            </div>
        );
    }
}

export default NavBarCategorias;