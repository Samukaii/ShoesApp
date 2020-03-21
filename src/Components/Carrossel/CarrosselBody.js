import React, { Component } from 'react';

class CarrosselBody extends Component {
    state = {  }
    render() { 
        const c = this.props.carrosselId;
        return (  
            <div id={c?c:"CarrosselExemplo"} className="carousel slide" data-ride="carousel">
                {this.props.children}
            </div>
        );
    }
}
 
export default CarrosselBody;