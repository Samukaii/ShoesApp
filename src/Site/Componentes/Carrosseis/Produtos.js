import React, { Component } from 'react';
import CarrosselBody from "../../../Components/Carrossel/CarrosselBody";
import CarrosselIndicators from "../../../Components/Carrossel/CarrosselIndicators";
import CarrosselControles from "../../../Components/Carrossel/CarrosselControles";
import CarrosselInner from '../../../Components/Carrossel/CarrosselInner';
import CarrosselItem from '../../../Components/Carrossel/CarrosselItem';

class Produtos extends Component {
    itens = 
    [
        {
            path: "./assets/produtos/prd 1.png"
        },
        {
            path: "./assets/produtos/prd 2.png"
        },
        {
            path: "./assets/produtos/prd 3.png"
        }
    ]
    render() { 
        const it = this.itens;
        return (
            <CarrosselBody carrosselId="Produtos">
                <CarrosselIndicators carrosselId="Produtos" number={3}/>
                <CarrosselInner>
                    <CarrosselItem item = {it[0]} ativo/>
                    <CarrosselItem item = {it[1]}/>
                    <CarrosselItem item = {it[2]}/>
                    <CarrosselItem item = {it[2]}/>
                </CarrosselInner>
                <CarrosselControles carrosselId="Produtos" c="text-luxury"/>
            </CarrosselBody>
        );
    }
}
 
export default Produtos;