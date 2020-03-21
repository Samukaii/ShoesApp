import React, { Component } from 'react';

class NavItem extends Component {
    
    render() {
        if(this.props.cortexto)
        {
            return (  
                <li className={"nav-item " + this.props.classes}>
                    <a href="#/" className={"nav-link " + this.props.cortexto}><i className={this.props.icone}></i> {this.props.titulo}</a>
                </li>
            );
        }
        else
        {
            return (  
                <li className={"nav-item " + this.props.classes}>
                    <a href="#/" className="nav-link text-light"><i className={this.props.icone}></i> {this.props.titulo}</a>
                </li>
            );
        }

    }
}
 
export default NavItem;