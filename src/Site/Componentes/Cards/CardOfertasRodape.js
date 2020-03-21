import React, { Component } from 'react';
import CardBody from '../../../Components/Card/CardBody';
import CardGroup from '../../../Components/Card/CardGroup';


class CardOfertasRodape extends Component
{
    render()
    {
        return(
            <div>
                <CardBody imgBottom="./assets/card ofertas rodape/cdofrod large 1-1.png" c="m-4" href="#/"/>
                <CardGroup>
                    <CardBody imgBottom="./assets/card ofertas rodape/cdofrod 1-1.png" c="m-4" href="#/">

                    </CardBody>
                    <CardBody imgBottom ="./assets/card ofertas rodape/cdofrod 1-2.png" c="m-4" href="#/">

                    </CardBody>
                    <CardBody imgBottom="./assets/card ofertas rodape/cdofrod 1-3.png" c="m-4" href="#/">

                    </CardBody>
                </CardGroup>
                
            </div>
        );
    }
}

export default CardOfertasRodape;