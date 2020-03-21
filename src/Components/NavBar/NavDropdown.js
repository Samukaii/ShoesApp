import React, { Component } from 'react';

class NavDropdown extends Component {
    state = {  }
    render() { 
        return (
            <li className="nav-item dropdown">
            <a href="#/" className="nav-link dropdown-toggle text-light" role="button" data-toggle="dropdown">
                <i class={this.props.icone}></i> {this.props.titulo}
            </a>

            <div className="dropdown-menu">
                {this.props.children}
            </div>
            </li>
        );
    }
}
 
export default NavDropdown;