import React, { Component } from 'react';

class CarrosselItem extends Component {
    state = {  }
    render() { 
        const it = this.props.item;
        const ativo = this.props.ativo;
        if(ativo)
        {
            return (  
                <div className="carousel-item active">
                    <img src={it.path} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                    <h5>{it.titulo}</h5>
                    <p>{this.props.children}</p>
                    </div>
                </div>
            );
        }
        else
        {
            return (  
                <div className="carousel-item">
                    <img src={it.path} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                    <h5>{it.titulo}</h5>
                    <p>{this.props.children}</p>
                    </div>
                </div>
            );
        }

    }
}
 
export default CarrosselItem;