import React, { Component } from 'react';

class CarrosselItemPerson extends Component {
    state = {  }
    render() { 
        const ativo = this.props.ativo;
        if(ativo)
        {
            return (  
                <div className="carousel-item active">
                    {this.props.children}
                </div>
            );
        }
        else
        {
            return (  
                <div className="carousel-item">
                    {this.props.children}
                </div>
            );
        }

    }
}
 
export default CarrosselItemPerson;