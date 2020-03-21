import React, { Component } from 'react';

class ImagemTextIsabela extends Component
{
    render()
    {
        return(
            <div id={this.props.id} style={{fontSize:12}}>
                <div className="list-group w-75 h-25" >
                    <div className="list-group-item p-1 mb-1">
                        Camiseta Colcci...<br/>
                        <b>R$ 99,90</b>
                    </div>
                    <div className="list-group-item p-1 mb-1">
                        Tênis Ecko Comf...<br/>
                        <b>R$ 58,49</b>
                    </div>
                    <div className="list-group-item p-1 mb-1">
                        Meia Soquete...<br/>
                        <b>R$ 29,49</b>
                    </div>
                    <div className="list-group-item p-1 mb-1">
                        Meia Soquete...<br/>
                        <b>R$ 29,49</b>
                    </div>
                        <button className="btn btn-warning font-weight-bold">
                            Compre o Look
                        </button>
                </div>
            </div>
        );
    }
}

export default ImagemTextIsabela;