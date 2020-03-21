import React, { Component } from 'react';
import CardBody from "../../../Components/Card/CardBody";
import CardGroup from "../../../Components/Card/CardGroup";
import CarrosselBody from '../../../Components/Carrossel/CarrosselBody';
import CarrosselInner from '../../../Components/Carrossel/CarrosselInner';
import CarrosselControles from '../../../Components/Carrossel/CarrosselControles';
import CarrosselOutItem from '../../../Components/Carrossel/CarrosselOutItem';
import CardText from '../../../Components/Card/CardText';
import Contador from '../../../Components/Contador/Contador';

class CardOfertasDia extends Component {
    itens = 
    [
        {
            path: "./assets/card ofertas do dia/cdofdia car 1.png"
        },
        {
            path: "./assets/card ofertas do dia/cdofdia car 2.png"
        },
        {
            path: "./assets/card ofertas do dia/cdofdia car 3.png"
        },
    ]
    render() { 
        return (  
            <CardGroup>
                <CardBody imgTop="./assets/card ofertas do dia/cdofdia 1.png" c="m-3">
                </CardBody>
                <CardBody imgTop="./assets/card ofertas do dia/cdofdia 2.png" c="m-3">
                </CardBody>
                <CardBody c="m-3">
                    <Contador>
                        <h5>Ofertas Do Dia</h5>
                        Aproveite! essa oferta acaba em:
                    </Contador>
                    <CarrosselBody carrosselId="Ofertas">
                        <CarrosselInner>
                            <CarrosselOutItem item = {this.itens[0]} ativo>
                                <CardText titulo="Kimono Jiu Jitsu Zion ZComp">
                                    <s className="text-muted">R$ 299,90</s>
                                    <h3>R$ 189,90</h3> 
                                    <div className="d-flex justify-content-end">
                                        <a href="#/" className="btn btn-primary">Aproveite 
                                        <i class="fas fa-arrow-right ml-3"></i></a>
                                    </div>
                                </CardText>
                            </CarrosselOutItem>
                            <CarrosselOutItem item = {this.itens[1]}>
                                <CardText titulo="Sandália Havaianas Color Fun Feminina">
                                    <s className="text-muted">R$ 19,99</s>
                                    <h3>R$ 14,24</h3> 
                                    <div className="d-flex justify-content-end">
                                        <a href="#/" className="btn btn-primary">Aproveite 
                                        <i class="fas fa-arrow-right ml-3"></i></a>
                                    </div>
                                </CardText>
                            </CarrosselOutItem>
                            <CarrosselOutItem item = {this.itens[2]}>
                                <CardText titulo="Camisa Arsenal Away 19/20 Adidas...">
                                    <s className="text-muted">R$ 249,99</s>
                                    <h3>R$ 169,99</h3> 
                                    <div className="d-flex justify-content-end">
                                        <a href="#/" className="btn btn-primary">Aproveite 
                                        <i class="fas fa-arrow-right ml-3"></i></a>
                                    </div>
                                </CardText>
                            </CarrosselOutItem>
                        </CarrosselInner>
                        <CarrosselControles carrosselId="Ofertas" c="text-dark"/>
                    </CarrosselBody>
                </CardBody>
            </CardGroup>
        );
    }
}
 
export default CardOfertasDia;