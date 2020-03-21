import React, { Component } from 'react';
import Produtos from "../Componentes/Carrosseis/Produtos";
import CardPromocoes from "../Componentes/Cards/CardPromocoes";
import CardOfertasDia from "../Componentes/Cards/CardOfertasDia";
import NaSuperShoes from '../Componentes/Carrosseis/NaSuperShoes';
import RecebaOfertas from '../Componentes/Formularios/RecebaOfertas';
import CardOfertasRodape from '../Componentes/Cards/CardOfertasRodape';
import NavegueMarcas from '../Componentes/Carrosseis/NavegueMarcas';
import OfertasImperdiveis from '../Componentes/Carrosseis/OfertasImperdiveis';
import CardNovidades from '../Componentes/Cards/CardNovidades';
import MaisVistos from '../Componentes/Carrosseis/MaisVistos';
import CompreLook from '../Componentes/Carrosseis/CompreLook';

class Home extends Component {
    state = {a:["a"]}
    render() {
        return (
            <div>
                <Produtos />
                <CardPromocoes />
                <CardOfertasDia />
                <NaSuperShoes />
                <CompreLook />
                <MaisVistos />
                <RecebaOfertas />
                <CardNovidades />
                <OfertasImperdiveis />
                <NavegueMarcas />
                <CardOfertasRodape />
            </div>
        );
    }
}

export default Home;