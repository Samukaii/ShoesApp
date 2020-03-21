import React, { Component } from 'react';

class CardBody extends Component {
    state = {  }
    render() {
        const p = this.props;
        const t = this.props.imgTop;
        const b = this.props.imgBottom;
        const h = this.props.href;
        const ch = this.props.children;
        return (  
            <div className={"card " + p.c}>
                {t?h?<a href={h}><img src={t} alt="Imagem" className={"card-img-top " + p.cImg}/></a>:
                <img src={t} alt="Imagem" className={"card-img-top " + p.cImg}/>:<div></div>}
                {ch}
                {t?<div></div>:b?h?<a href={h}><img src={b} alt="Imagem" className={"card-img-bottom " + p.cImg}/></a>
                :<img src={b} alt="Imagem" className={"card-img-bottom " + p.cImg}/>:<div></div>}
            </div>
        );
    }
}
 
export default CardBody;