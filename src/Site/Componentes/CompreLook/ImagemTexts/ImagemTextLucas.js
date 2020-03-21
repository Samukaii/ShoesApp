import React, { Component } from 'react';

class ImagemTextLucas extends Component
{
    render()
    {
        return(
            <div id={this.props.id} style={{fontSize:12}}>
                <div className="list-group w-75" >
                    <div className="list-group-item rounded-25 mb-1 p-0">
                        Camiseta Nike... <br/>
                        <b>R$ 59,90</b>
                    </div>
                    <div className="list-group-item p-1 mb-1">
                        Short Nike... <br/>
                        <b>R$ 69,99</b>
                    </div>
                    <div className="list-group-item p-1 mb-1">
                        Meia Nike... <br/>
                        <b>R$ 36,99</b>
                    </div>
                    <div className="list-group-item p-1 mb-1">
                        Tênis Nike... <br/>
                        <b>R$ 199,99</b>
                    </div>
                    <button className="btn btn-warning font-weight-bold">
                        Compre o Look
                    </button>
                </div>
            </div>
        );
    }
}

export default ImagemTextLucas;