import React from 'react';
import MenuOcultoPai from "../../../Components/Outros/MenuOcultoPai";
import ImagemGroup from "../../../Components/Imagens/ImagemGroup";
import ImagemItem from "../../../Components/Imagens/ImagemItem";
import MenuOcultoAction from "../../../Components/Outros/MenuOcultoAction";
import ImagemTextLeonardo from './ImagemTexts/ImagemTextLeonardo';
import ImagemTextIsabela from './ImagemTexts/ImagemTextIsabela';
import ImagemTextLucas from './ImagemTexts/ImagemTextLucas';
import ImagemTextRenata from './ImagemTexts/ImagemTextRenata';

class CompreLookPage2 extends MenuOcultoPai
{
    render()
    {
        const i = this.props.id;
        const s = this.state.ativo;
        const sz= [250,600];
        return(
            <div onMouseOver={this.ativar} onMouseOut={this.desativar}>
                <ImagemGroup>
                    <MenuOcultoAction idTarget={i} ativo={s}>
                        <ImagemItem src="./Assets/CompreLook/leonardo.png" size={sz} onText
                        offset={[120,-30]}>
                            <ImagemTextLeonardo id={i}/>
                        </ImagemItem>
                    </MenuOcultoAction>
                    <MenuOcultoAction idTarget={i+1} ativo={s}>
                        <ImagemItem src="./Assets/CompreLook/isabela.png" size={sz} onText 
                        offset = {[120,-30]}>
                            <ImagemTextIsabela id={i+1}/>
                        </ImagemItem>
                    </MenuOcultoAction>
                    <MenuOcultoAction idTarget={i+2} ativo={s}>
                        <ImagemItem src="./Assets/CompreLook/lucas.png" size={sz} onText
                        offset={[120,-30]}>
                            <ImagemTextLucas id={i+2}/>
                        </ImagemItem>
                    </MenuOcultoAction>
                    <MenuOcultoAction idTarget={i+3} ativo={s}>
                        <ImagemItem src="./Assets/CompreLook/renata.png" size={sz} onText
                        offset={[120,-30]}>
                            <ImagemTextRenata id={i+3} ativo={s}/>
                        </ImagemItem>
                    </MenuOcultoAction>
                </ImagemGroup>
            </div>
        );
    }
}

export default CompreLookPage2;