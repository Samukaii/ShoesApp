import React, { Component } from 'react';

class ImagemTextRenata extends Component
{
    render()
    {
        return(
            <div id={this.props.id} style={{fontSize:12}}>
                <div className="list-group w-75 h-25" >
                    <div className="list-group-item rounded-25 mb-1 p-0">
                        Vestido Colcci... <br/>
                        <b>R$ 129,99</b>
                    </div>
                    <div className="list-group-item p-1 mb-1">
                        Meia Cano Baixo... <br/>
                        <b>R$ 20,99</b>
                    </div>
                    <div className="list-group-item p-1 mb-1">
                        Meia Cano Baixo... <br/>
                        <b>R$ 20,99</b>
                    </div>
                    <div className="list-group-item p-1 mb-1">
                        Meia Cano Baixo... <br/>
                        <b>R$ 20,99</b>
                    </div>
                        <button className="btn btn-warning font-weight-bold">
                            Compre o Look
                        </button>
                </div>
            </div>
        );
    }
}

export default ImagemTextRenata;