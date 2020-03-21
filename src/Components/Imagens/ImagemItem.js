import React, { Component } from 'react';
import ImagemCircle from './ImagemCircle';
import ImagemNormal from './ImagemNormal';
import ImagemComTexto from './ImagemComTexto';

class ImagemItem extends Component
{
    render()
    {
        const p = this.props;
        return(
            <li className="list-group-item" style={p.size?{height:p.size[1]}:{height:"auto"}}>
                {p.original?
                (
                    <ImagemNormal src={p.src} c={p.c} size={p.size}>
                        {p.children}
                    </ImagemNormal>
                ):
                p.onText?
                (
                    <ImagemComTexto src={p.src} c={p.c} size={p.size} offset={this.props.offset}>
                        {p.children}
                    </ImagemComTexto>
                ):
                (
                    <ImagemCircle src={p.src} c={p.c} size={p.size}>
                        {p.children}
                    </ImagemCircle>
                )}

            </li>
        );
    }
}

export default ImagemItem;