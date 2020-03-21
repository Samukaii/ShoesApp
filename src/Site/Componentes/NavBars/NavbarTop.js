import React, { Component } from 'react';
import Nav from '../../../Components/NavBar/Nav';

class NavbarTop extends Component
{
    render()
    {
        return(
            <Nav c="bg-dark-luxury py-1 text-light d-flex">
                <p className="mr-auto" style={{fontSize: 14}}>Produtos de moda com até 70% off ></p>
                <i class="fas fa-question-circle mx-2 "></i>Tire suas dúvidas
            </Nav>
        );
    }
}

export default NavbarTop;