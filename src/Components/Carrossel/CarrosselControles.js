import React, { Component } from 'react';

class CarrosselControles extends Component {
    render() {
        const p = this.props; 
        const c = this.props.carrosselId;
        return (  
            <div>
                <a className="carousel-control-prev" href={"#" + (c?c:"CarrosselExemplo")} role="button" data-slide="prev">
                    {p.icones?<i class={p.icones.prev}></i>:
                    <i class={"fas fa-chevron-left fa-3x " + p.c}></i>}
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href={"#" + (c?c:"CarrosselExemplo")} role="button" data-slide="next">
                    {p.icones?<i class={p.icones.next}></i> :
                    <i class={"fas fa-chevron-right fa-3x " + p.c}></i>}
                    <span className="sr-only">Proximo</span>
                </a>
            </div>
        );
    }
}
 
export default CarrosselControles;