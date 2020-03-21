import React, { Component } from 'react';
import CardGroup from "../../../Components/Card/CardGroup";
import CardBody from "../../../Components/Card/CardBody";
import CardText from '../../../Components/Card/CardText';

class CardPromocoes extends Component {
    state = {  }
    render() { 
        return (
            <CardGroup c="mx-3 my-4">
                <CardBody>
                    <CardText>
                        <h5 className="card-title text-center">
                            <i className="fas fa-store mr-3"></i>
                            2 Tênis por R$ 99,99
                        </h5>
                        <div className="d-flex justify-content-center mt-5">
                            <button className="btn btn-info mx-5">Conferir Agora<i class="fas fa-arrow-right ml-3"></i></button>
                        </div>
                    </CardText>
                </CardBody>
                <CardBody>
                    <CardText>
                        <h5 className="card-title text-center">
                            <i className="fas fa-store mr-3"></i>
                            3 produtos por R$ 99.90 
                        </h5>
                        <div className="d-flex justify-content-center mt-5">
                            <button className="btn btn-info mx-5">Conferir Agora<i class="fas fa-arrow-right ml-3"></i></button>
                        </div>
                    </CardText>
                </CardBody>
                <CardBody>
                    <CardText>
                        <h5 className="card-title text-center">
                            <i className="fas fa-store mr-3"></i>
                            4 Camisetas por R$ 99.90
                        </h5>
                        <div className="d-flex justify-content-center mt-5">
                            <button className="btn btn-info mx-5">Conferir Agora<i class="fas fa-arrow-right ml-3"></i></button>
                        </div>
                    </CardText>
                </CardBody>
                <CardBody>
                    <CardText>
                        <h5 className="card-title text-center">
                            <i className="fas fa-store mr-3"></i>
                            3 Produtos pelo preço de 2
                        </h5>
                        <div className="d-flex justify-content-center mt-5">
                            <button className="btn btn-info mx-5">Conferir Agora<i class="fas fa-arrow-right ml-3"></i></button>
                        </div>
                    </CardText>
                </CardBody>
            </CardGroup>
        );
    }
}
 
export default CardPromocoes;