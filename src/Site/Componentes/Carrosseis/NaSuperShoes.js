import React, { Component } from 'react';
import CarrosselBody from '../../../Components/Carrossel/CarrosselBody';
import CarrosselInner from '../../../Components/Carrossel/CarrosselInner';
import CarrosselIndicators from '../../../Components/Carrossel/CarrosselIndicators';
import CarrosselControles from '../../../Components/Carrossel/CarrosselControles';
import ImagemItem from '../../../Components/Imagens/ImagemItem';
import CarrosselItemPerson from '../../../Components/Carrossel/CarrosselItemPerson';
import ImagemGroup from '../../../Components/Imagens/ImagemGroup';

class NaSuperShoes extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="container my-5">
                    <h4 className="text-luxury text-center">Na SuperShoes também tem</h4>
                </div>
                <CarrosselBody carrosselId="NaSuper">
                    <CarrosselIndicators carrosselId="NaSuper"/>
                    <CarrosselInner>
                        <CarrosselItemPerson ativo>
                            <ImagemGroup>
                                <ImagemItem src="./assets/na supershoes/nssh 1-1.png">
                                    Bicicletas
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 1-2.png">
                                    Eletrônicos
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 1-3.png">
                                    Cuidados Pessoais
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 1-4.png">
                                    Vitaminas
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 1-5.png">
                                    Equipamentos Fitness
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 1-6.png">
                                    Games
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 1-7.png">
                                    Yoga e Pilates
                                </ImagemItem>
                            </ImagemGroup>
                        </CarrosselItemPerson>
                        <CarrosselItemPerson>
                            <ImagemGroup>
                                <ImagemItem src="./assets/na supershoes/nssh 2-1.png">
                                    Relógios
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 2-2.png">
                                    Calças
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 2-3.png">
                                    Camisas Polo
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 2-4.png">
                                    Sapatênis
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 2-5.png">
                                    Óculos Escuros
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 2-6.png">
                                    Chinelos
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 2-7.png">
                                    Mochilas
                                </ImagemItem>
                            </ImagemGroup>
                        </CarrosselItemPerson>
                        <CarrosselItemPerson>
                            <ImagemGroup>
                                <ImagemItem src="./assets/na supershoes/nssh 3-1.png">
                                    Moletons
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 3-2.png">
                                    Smartwatches
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 3-3.png">
                                    Jeans
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 3-4.png">
                                    Roupas de Compressão
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 3-5.png">
                                    Roupas Térmicas
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 3-6.png">
                                    Bolas de Futebol
                                </ImagemItem>
                                <ImagemItem src="./assets/na supershoes/nssh 3-7.png">
                                    Bonés
                                </ImagemItem>
                            </ImagemGroup>
                        </CarrosselItemPerson>
                    </CarrosselInner>
                    <CarrosselControles carrosselId="NaSuper"
                    />
                </CarrosselBody>
            </div>
        );
    }
}
 
export default NaSuperShoes;