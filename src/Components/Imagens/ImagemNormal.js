import React, { Component } from 'react';

class ImagemNormal extends Component
{
    render()
    {
        const p = this.props;
        return(
            <div>
                <img src={this.props.src} alt="Imagem" 
                className={"ml-3 "+this.props.c}
                style={{width:p.size?p.size[0]:130}}></img>
                <h5 className="text-center my-2">{this.props.children}</h5>
            </div>
        );
    }
}

export default ImagemNormal;