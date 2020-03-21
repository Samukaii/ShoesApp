import React, { Component } from 'react';
import CarrosselBody from '../../../Components/Carrossel/CarrosselBody';
import CarrosselInner from '../../../Components/Carrossel/CarrosselInner';
import CarrosselControles from '../../../Components/Carrossel/CarrosselControles';
import CarrosselItemPerson from '../../../Components/Carrossel/CarrosselItemPerson';
import CardGroup from '../../../Components/Card/CardGroup';
import CardBody from '../../../Components/Card/CardBody';
import EstrelasPontuacao from '../../../Components/Outros/EstrelasPontuacao';
import CardText from '../../../Components/Card/CardText';

class MaisVistos extends Component
{
    render()
    {
        return(
            <div className="my-5">
                <h4 className="font-weight-bold ml-3 mb-4">Mais Vistos</h4>
                <CarrosselBody carrosselId="imperdiveis">
                    <CarrosselInner>
                        <CarrosselItemPerson ativo>
                            <CardGroup>
                                <CardBody imgTop = "./assets/mais vistos/mv 1-1.png" c="mx-3">
                                    <CardText titulo="Tênis Tryon Tauri Masculino">
                                        <EstrelasPontuacao pontos="4"/>
                                        <s className="text-muted">R$ 129,99</s>
                                        <h5 className="font-weight-bold">R$ 49,99</h5>
                                    </CardText>
                                </CardBody>
                                <CardBody imgTop = "./assets/mais vistos/mv 1-2.png" c="mx-3">
                                    <CardText titulo="Tênis Nike Court Lite 2 Masculino">
                                        <EstrelasPontuacao pontos="4.5"/>
                                        <h5 className="text-success">Frete Grátis</h5>
                                        <s className="text-muted">R$ 299,99</s>
                                        <h5 className="font-weight-bold">R$ 169,99</h5>
                                        <p>4x de R$ 42,50</p>
                                    </CardText>
                                </CardBody>
                                <CardBody imgTop = "./assets/mais vistos/mv 1-3.png" c="mx-3">
                                    <CardText titulo="Tênis Under Armour Charged Carbon Masculino">
                                        <EstrelasPontuacao pontos="4.5"/>
                                        <h5 className="text-success">Frete Grátis</h5>
                                        <p className="text-muted m-0">A partir de</p>
                                        <h5 className="font-weight-bold">R$ 179,99</h5>
                                        <p>4x de R$ 45,00</p>
                                    </CardText>
                                </CardBody>
                                <CardBody imgTop = "./assets/mais vistos/mv 1-4.png" c="mx-3">
                                    <CardText titulo="Camisa Liverpool All Black 125 Anos Edição Limitada Masculina">
                                        <EstrelasPontuacao pontos="4"/>
                                        <h5 className="text-success">Frete Grátis</h5>
                                        <s className="text-muted">R$ 119,99</s>
                                        <h5 className="font-weight-bold">R$ 59,99</h5>
                                        <div className="m-0 border px-2 w-50 border-secondary rounded-right-10">Lançamento</div>
                                    </CardText>
                                </CardBody>
                            </CardGroup>
                        </CarrosselItemPerson>
                        <CarrosselItemPerson>
                            <CardGroup>
                                <CardBody imgTop = "./assets/mais vistos/mv 2-1.png" c="mx-3">
                                    <CardText titulo="Sapatilha Olympikus Angel Stripe 388 Feminina">
                                        <EstrelasPontuacao pontos="4.5"/>
                                        <h5 className="text-success">Frete Grátis</h5>
                                        <p className="text-muted m-0">A partir de</p>
                                        <h5 className="font-weight-bold">R$ 79,99</h5>
                                        <p>2x de R$ 40,00</p>
                                    </CardText>
                                </CardBody>
                                <CardBody imgTop = "./assets/mais vistos/mv 2-2.png" c="mx-3">
                                    <CardText titulo="Tênis Adidas Grand Court Base Feminino">
                                        <EstrelasPontuacao pontos="4.5"/>
                                        <h5 className="text-success">Frete Grátis</h5>
                                        <s className="text-muted">R$ 249,99</s>
                                        <h5 className="font-weight-bold">R$ 151,99</h5>
                                        <p>3x de R$ 50,66</p>
                                    </CardText>
                                </CardBody>
                                <CardBody imgTop = "./assets/mais vistos/mv 2-3.png" c="mx-3">
                                    <CardText titulo="Tênis Olympikus Hera Feminino">
                                        <EstrelasPontuacao pontos="4.5"/>
                                        <h5 className="text-success">Frete Grátis</h5>
                                        <s className="text-muted">R$ 189,90</s>
                                        <h5 className="font-weight-bold">R$ 89,99</h5>
                                        <p>2x de R$ 45,00</p>
                                    </CardText>
                                </CardBody>
                                <CardBody imgTop = "./assets/mais vistos/mv 2-4.png" c="mx-3">
                                    <CardText titulo="Tênis Everlast Vista Masculino">
                                        <EstrelasPontuacao pontos="4"/>
                                        <h5 className="text-success">Frete Grátis</h5>
                                        <s className="text-muted">R$ 129,99</s>
                                        <h5 className="font-weight-bold">R$ 69,99</h5>
                                    </CardText>
                                </CardBody>
                            </CardGroup>
                        </CarrosselItemPerson>
                    </CarrosselInner>
                    <CarrosselControles carrosselId="imperdiveis">

                    </CarrosselControles>
                </CarrosselBody>
            </div>
        );
    }
}

export default MaisVistos;