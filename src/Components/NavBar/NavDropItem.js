import React, { Component } from 'react';

class NavDropItem extends Component {
    render() {
        if(this.props.tipo ==="texto")
        {
            return <p href="#" className="dropdown-item-text">{this.props.children}</p>
        }
        else
        {
            return <a href="#" className="dropdown-item">{this.props.titulo}</a>
        }
    }
}
 
export default NavDropItem;