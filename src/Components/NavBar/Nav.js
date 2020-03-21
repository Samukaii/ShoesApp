import React, { Component } from 'react';

class Nav extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className={"navbar navbar-expand-lg " + this.props.c}>
                {this.props.children}
            </nav>
        );
    }
}

export default Nav;