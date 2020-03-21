import React, { Component } from 'react';

class EstrelasPontuacao extends Component
{
    constructor()
    {
        super();
        this.state= 
        {
            stars: 0,
            half: false
        }
        this.desconstruirPontos = this.desconstruirPontos.bind(this);
        this._interval=setInterval(this.desconstruirPontos,1000);
    }
    estrelas = (index) =>
    {
        if(this.state.half && index >= this.state.stars -1)
        return <i className="fas fa-star-half fa-1x text-warning"></i>;

        else
        return <i class="fas fa-star fa-1x text-warning"></i>;
    }

    desconstruirPontos()
    {
        let n = Number(this.props.pontos);
        if(Number.isInteger(n))
        {
            this.setState(
                {
                    stars: this.props.pontos,
                    half: false
                }
            )
        }
        else
        {
            this.setState(
                {
                    stars: Math.ceil(this.props.pontos),
                    half: true
                }
            )
        }
        clearInterval()
    }

    render()
    {
        let linhas = [];
        for (let i = 0; i < this.state.stars; i++) {
            linhas.push(i);
            
        }
        return(
            <div>
            {linhas.map(this.estrelas)}
            </div>
        );
    }
}

export default EstrelasPontuacao;