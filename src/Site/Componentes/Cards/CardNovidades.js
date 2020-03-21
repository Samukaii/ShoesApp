import React, { Component } from 'react';
import CardBody from '../../../Components/Card/CardBody';
import CardGroup from '../../../Components/Card/CardGroup';

class CardNovidades extends Component
{
    render()
    {
        return(
            <div>
                <CardGroup>
                    <CardBody imgTop="./assets/card novidades/cdnv 1-1.png" c="m-4" href="#/">

                    </CardBody>
                    <CardBody imgTop="./assets/card novidades/cdnv 1-2.png" c="m-4" href="#/">

                    </CardBody>
                    <CardBody imgTop="./assets/card novidades/cdnv 1-3.png" c="m-4" href="#/">

                    </CardBody>
                </CardGroup>
            </div>
        );
    }
}

export default CardNovidades;