import React, { Component } from 'react';

class MenuOcultoPai extends Component
{
    constructor()
    {
        super();
        this.state = 
        {
            ativo: false
        }
        this.ativar = this.ativar.bind(this);
        this.desativar = this.desativar.bind(this);
    }

    ativar()
    {
        this.setState(
            {
                ativo: true
            }
        )
        //console.log("ativou " + this.state.ativo);
    }
    desativar()
    {
        this.setState(
            {
                ativo: false
            }
        )
        //console.log("desativou " + this.state.ativo);
    }

    render()
    {
        return <div></div>;
    }
}

export default MenuOcultoPai;