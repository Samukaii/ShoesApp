import React, { Component } from 'react';

class CarrosselOutItem extends Component {
    state = {  }
    render() { 
        const it = this.props.item;
        const ativo = this.props.ativo;
        if(ativo)
        {
            return (  
                <div className="carousel-item active">
                    <img src={it.path} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block"></div>
                    {it.titulo}
                    {this.props.children}
                </div>
            );
        }
        else
        {
            return (  
                <div className="carousel-item">
                    <img src={it.path} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block"></div>
                    {this.props.children}
                </div>
            );
        }

    }
}
 
export default CarrosselOutItem;