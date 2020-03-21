import React, { Component } from 'react';

class CarrosselIndicators extends Component {
    RenderizarLinha = (linhaAtual) => 
    {
        const c = this.props.carrosselId;
        if(linhaAtual===0)
        return <li data-target={"#" + (c?c:"CarrosselExemplo")} data-slide-to={linhaAtual.toString()} class="active"></li>;
        else
        return <li data-target={"#" + (c?c:"CarrosselExemplo")} data-slide-to={linhaAtual.toString()}></li>;
    }
    render() {
        let linha = [];
        for (let i = 0; i < this.props.number; i++) 
        {
            linha.push(i);
        } 

        return (  
            <ol style={{width: this.props.number * (120/3)}} className={"mx-auto carousel-indicators " + this.props.c}>
                {linha.map(this.RenderizarLinha)}
            </ol>
        );
    }
}
 
export default CarrosselIndicators;