import React, { Component } from 'react';

class Contador extends Component {
    constructor ()
    {
        super();
        this.state=
        {
            horas:2,
            minutos:47,
            segundos:13
        }
        this.reiniciar= this.reiniciar.bind(this);
        this.diminuir= this.diminuir.bind(this);
        this._interval=setInterval(this.diminuir,1000);
    }
    diminuir()
    {
        this.setState
        ({
            segundos: this.state.segundos-1
        });
    }
    reiniciar()
    {
        this.setState
        ({
            horas:2,
            minutos:47,
            segundos:13,
        });
    }

    zero = (x)=>
    {
        if(x<10)
        {
            return '0' + x;
        }
        else
        {
            return x.toString();
        }
    }

    contador = () =>
    {
        var st = this.state;
        if(st.segundos <= 0)
        {
            if(st.minutos > 0)
            {
                this.setState(
                    {
                        segundos: 59,
                        minutos: this.state.minutos-1
                    }
                )
            }
            else if(st.horas >0)
            {
                this.setState(
                    {
                        horas: this.state.horas -1,
                        minutos: 59,
                        segundos: 59
                    }
                )
            }
            else
            {
                this.reiniciar();
            }
        }
        return <h3>{this.zero(st.horas)}:{this.zero(st.minutos)}:{this.zero(st.segundos)}</h3>;
    }
    render() { 
        return (  
            <div className="bg-calmWarn text-light">
                <div className="container m-3">
                    <div className="row">
                        <div className="col">
                        {this.props.children}
                        </div>
                        <div className="col">
                            {this.contador()}
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}
 
export default Contador;