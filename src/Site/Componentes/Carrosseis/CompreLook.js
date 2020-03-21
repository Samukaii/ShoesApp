import React, { Component } from 'react';
import CarrosselBody from '../../../Components/Carrossel/CarrosselBody';
import CarrosselInner from '../../../Components/Carrossel/CarrosselInner';
import CarrosselControles from '../../../Components/Carrossel/CarrosselControles';
import CarrosselItemPerson from '../../../Components/Carrossel/CarrosselItemPerson';
import CarrosselIndicators from '../../../Components/Carrossel/CarrosselIndicators';
import CompreLookPage1 from '../CompreLook/CompreLookPage1';
import CompreLookPage2 from '../CompreLook/CompreLookPage2';

class CompreLook extends Component
{
    render()
    {
        return(
            <div>
                <CarrosselBody carrosselId="CompreLook">
                    <CarrosselInner>
                        <CarrosselItemPerson ativo>
                            <CompreLookPage1 id={1}/>
                        </CarrosselItemPerson>
                        <CarrosselItemPerson>
                            <CompreLookPage2 id={5}/>
                        </CarrosselItemPerson>
                    </CarrosselInner>
                    <CarrosselControles carrosselId="CompreLook" c="text-dark"/>
                </CarrosselBody>
            </div>
        );
    }
}

export default CompreLook;