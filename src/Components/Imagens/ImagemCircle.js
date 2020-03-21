import React, { Component } from 'react';

class ImagemCircle extends Component
{   
    render()
    {
        const p = this.props;
        return(
            <div>
                <img src={this.props.src} alt="Imagem" 
                className={"rounded-circle ml-3 "+this.props.c}
                style={{width:p.size?p.size[0]:130}}/>
                <h5 className="text-center my-2">{this.props.children}</h5>
            </div>
        );
    }
}

export default ImagemCircle;