import React, { Component } from 'react';

class NavList extends Component {
    state = {  }
    render() { 
        return (  
            <ul className="navbar-nav mr-auto">
                {this.props.children}
            </ul>
        );
    }
}
 
export default NavList;