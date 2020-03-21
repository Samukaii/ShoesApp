import React, { Component } from 'react';

class ImagemTextLeonardo extends Component
{
    render()
    {
        return(
            <div id={this.props.id} style={{fontSize:12}}>
                <div className="list-group w-75 h-25" >
                    <div className="list-group-item rounded-25 mb-1 p-0">
                        Camiseta Mizuno... <br/>
                        <b>R$ 49,99</b>
                    </div>
                    <div className="list-group-item p-1 mb-1">
                        Bermuda Mizuno... <br/>
                        <b>R$ 49,99</b>
                    </div>
                    <div className="list-group-item p-1 mb-1">
                        Tênis Mizuno... <br/>
                        <b>R$ 1.248,99</b>
                    </div>
                    <div className="list-group-item p-1 mb-1">
                        Meia Lupo... <br/>
                        <b>R$ 19,99</b>
                    </div>
                        <button className="btn btn-warning font-weight-bold">
                            Compre o Look
                        </button>
                </div>
            </div>
        );
    }
}

export default ImagemTextLeonardo;