import React, { Component } from 'react';
import CarrosselBody from '../../../Components/Carrossel/CarrosselBody';
import CarrosselInner from '../../../Components/Carrossel/CarrosselInner';
import CarrosselControles from '../../../Components/Carrossel/CarrosselControles';
import CarrosselItemPerson from '../../../Components/Carrossel/CarrosselItemPerson';
import ImagemGroup from '../../../Components/Imagens/ImagemGroup';
import ImagemItem from '../../../Components/Imagens/ImagemItem';

class NavegueMarcas extends Component
{
    render()
    {
        const sz = [290,"automatic"]
        return(
            <div>
                <h4 className="text-luxury text-center">Navegue Pelas Marcas</h4>
                <CarrosselBody carrosselId="Navegue">
                    <CarrosselInner>
                        <CarrosselItemPerson ativo>
                            <ImagemGroup>
                                <ImagemItem
                                src="./assets/navegue pelas marcas/nvm 1-1.png" 
                                original
                                size={sz}>
                                </ImagemItem>
                                <ImagemItem
                                src="./assets/navegue pelas marcas/nvm 1-2.png" 
                                original
                                size={sz}>
                                </ImagemItem>
                                <ImagemItem
                                src="./assets/navegue pelas marcas/nvm 1-3.png" 
                                original
                                size={sz}>
                                </ImagemItem>
                                <ImagemItem
                                src="./assets/navegue pelas marcas/nvm 1-4.png" 
                                original
                                size={sz}>
                                </ImagemItem>
                            </ImagemGroup>
                        </CarrosselItemPerson>
                        <CarrosselItemPerson>
                            <ImagemGroup>
                                <ImagemItem
                                src="./assets/navegue pelas marcas/nvm 2-1.png" 
                                original
                                size={sz}>
                                </ImagemItem>
                                <ImagemItem
                                src="./assets/navegue pelas marcas/nvm 2-2.png" 
                                original
                                size={sz}>
                                </ImagemItem>
                                <ImagemItem
                                src="./assets/navegue pelas marcas/nvm 2-3.png" 
                                original
                                size={sz}>
                                </ImagemItem>
                                <ImagemItem
                                src="./assets/navegue pelas marcas/nvm 2-4.png" 
                                original
                                size={sz}>
                                </ImagemItem>
                            </ImagemGroup>
                        </CarrosselItemPerson>
                        <CarrosselItemPerson>
                            <ImagemGroup>
                                <ImagemItem
                                src="./assets/navegue pelas marcas/nvm 3-1.png" 
                                original
                                size={sz}>
                                </ImagemItem>
                                <ImagemItem
                                src="./assets/navegue pelas marcas/nvm 3-2.png" 
                                original
                                size={sz}>
                                </ImagemItem>
                                <ImagemItem
                                src="./assets/navegue pelas marcas/nvm 3-3.png" 
                                original
                                size={sz}>
                                </ImagemItem>
                                <ImagemItem
                                src="./assets/navegue pelas marcas/nvm 3-4.png" 
                                original
                                size={sz}>
                                </ImagemItem>
                            </ImagemGroup>
                        </CarrosselItemPerson>
                    </CarrosselInner>
                    <CarrosselControles carrosselId="Navegue" c="text-dark"/>
                </CarrosselBody>
            </div>
            
        );
    }
}

export default NavegueMarcas;