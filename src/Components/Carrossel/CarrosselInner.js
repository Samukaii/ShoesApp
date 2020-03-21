import React, { Component } from 'react';

class CarrosselInner extends Component {
    state = {  }
    render() { 
        return (  
            <div className="carousel-inner">
                {this.props.children}
            </div>
        );
    }
}
 
export default CarrosselInner;