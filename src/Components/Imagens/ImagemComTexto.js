import React, { Component } from 'react';

class ImagemComTexto extends Component
{
    render()
    {
        const p = this.props;
        const o = p.offset? p.offset:[0,0];
        const style = 
        {
            position: "relative",
            right: -140 + o[0],
            bottom: 400 + o[1]
        }
        return(
            <div>
                <img src={this.props.src} alt="Imagem" 
                className={"m-0 "+this.props.c}
                style={{width:p.size?p.size[0]:130}}></img>
                <h5 style={style} className="text-center my-2">{this.props.children}</h5>
            </div>
        );
    }

    
}

export default ImagemComTexto;