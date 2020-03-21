import React, { Component } from 'react';

class NavBody extends Component {
    state = {  }
    render() { 
        return (  
            <div className="collapse navbar-collapse" id={this.props.ocultId}>
                {this.props.children}
            </div>
        );
    }
}
 
export default NavBody;