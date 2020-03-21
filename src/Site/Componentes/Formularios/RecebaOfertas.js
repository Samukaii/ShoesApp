import React, { Component } from 'react';

class RecebaOfertas extends Component
{
    render()
    {
        return(
            <div className="jumbotron text-center">
                <h3>Receba Ofertas e descontos Exclusivos</h3>
                <form className="form-group mt-4" action="">
                    <input type="text" className="form-control-lg mr-3" placeholder="Nome" size="30"/>
                    <input type="text" className="form-control-lg" placeholder="Digite seu e-mail" size="30"/>
                    <div>
                    <input type="submit" value="Sou Homem" className="btn btn-primary mt-3 mx-3 btn-lg"></input>
                    <input type="submit" value="Sou Mulher" className="btn btn-primary mt-3 mx-3 btn-lg"></input>
                    </div>

                </form>
            </div>
        );
    }
}

export default RecebaOfertas;