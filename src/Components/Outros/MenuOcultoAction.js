import React, { Component } from 'react';


class MenuOcultoAction extends Component
{
    constructor()
    {
        super();
        this.esconder = this.esconder.bind(this)
        this.mostrar = this.mostrar.bind(this)
        this.mouseActive = this.mouseActive.bind(this)
        this.mouseDesactive = this.mouseDesactive.bind(this)
        this.testar = this.testar.bind(this)
        this._interval=setInterval(this.testar,100);

        this.state = 
        {
            mouseOn: false
        }
    }

    testar()
    {
        console.log(this.props.ativo);
        if(!this.props.ativo)
        {
            this.mostrar(true);
        }
        else if(this.state.mouseOn)
        {
            this.mostrar(false);        
        }
        else
        {
            this.esconder();
        }
    }
    mouseActive()
    {
        this.setState({mouseOn: true})
    }
    mouseDesactive()
    {
        this.setState({mouseOn: false})
    }

    esconder()
    {
        const t = this.props.idTarget.toString();
        const tm = t + "Menu";
        const dt = document.getElementById(t);
        const dtm = document.getElementById(tm);

        if(dt)dt.style.opacity = "0%";
        if(dt)dtm.style.opacity = "50%";
    }
    mostrar(pessoa)
    {
        const t = this.props.idTarget.toString();
        const tm = t + "Menu";
        const dt = document.getElementById(t);
        const dtm = document.getElementById(tm);
        if(dt)dtm.style.transition = "opacity 0.4s ease";

        if(pessoa)
        {
            if(dt)dt.style.opacity = "0%";
            if(dt)dtm.style.opacity = "100%";  
        }
        else
        {
            if(dt)dt.style.opacity = "100%";
            if(dt)dtm.style.opacity = "100%";  
        }
    }
    render()
    {
        return(
            <div id={this.props.idTarget.toString() + "Menu"} onLoad={this.testar} onMouseOver={this.mouseActive} onMouseOut={this.mouseDesactive}>
            {this.props.children}
            </div>
        );
    }
}

export default MenuOcultoAction;