import React, { Component } from 'react';

class MainFooter extends Component {
    render() 
    { 
        return (
            <div className="jumbotron">
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row w-75 text-luxury d-flex justify-content-center">
                        <div className="col">
                            <i class="fas fa-truck fa-3x mx-3"></i>
                            <div className="d-inline-block">
                                <h5 className="font-weight-bold">FRETE GRÁTIS</h5>
                                <h6>Em produtos selecionados</h6>
                                <a href="#/" className="link-luxury sm-text">Confira as regras</a>
                            </div>
                        </div>
                        <div className="col">
                            <i className="fas fa-stopwatch fa-3x mx-3"/>  
                            <div className="d-inline-block">
                                <h6 className="font-weight-bold">ENTREGA EXPRESSA</h6>
                                <h6>A partir de 2 dias úteis</h6>
                                <a href="#/" className="link-luxury sm-text">Confira as regras</a>
                            </div>

                        </div>
                        <div className="col">
                            <i className="fas fa-credit-card fa-3x mx-3"/>
                            <div className="d-inline-block">
                                <h5 className="font-weight-bold">EM ATÉ 10X SEM JUROS</h5>
                                <h6>No cartão de crédito</h6>
                            </div>
                        </div>

                    </div>
                
                </div>
                <hr className="bg-luxury"/>
                <div className="row">
                    <div className="col">
                        <ul style={{listStyle:"none"}}>
                            <li><p className="text-luxury font-weight-bold">Institucional</p></li>
                            <li><a href="#/" className="text-common-link my-3">Sobre a Super Shoes</a></li>
                            <li><a href="#/" className="text-common-link my-3">Politica de Privacidade</a></li>
                            <li><a href="#/" className="text-common-link my-3">Trabalhe Conosco</a></li>
                            <li><a href="#/" className="text-common-link my-3">Programa de Afiliados</a></li>
                            <li><a href="#/" className="text-common-link my-3">Soluções Corporativas</a></li>
                            <li><a href="#/" className="text-common-link my-3">Regulamentos</a></li>
                            <li><a href="#/" className="text-common-link my-3">Conduta de Fornecedores</a></li>
                            <li><a href="#/" className="text-common-link my-3">Eventos</a></li>
                            <li><a href="#/" className="text-common-link my-3">Guia Super Shoes</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul style={{listStyle:"none"}}>
                            <li><p className="text-luxury font-weight-bold">Ajuda</p></li>
                            <li><a href="#/" className="text-common-link my-3">Entregas</a></li>
                            <li><a href="#/" className="text-common-link my-3">Pagamentos</a></li>
                            <li><a href="#/" className="text-common-link my-3">Trocas e Devoluções</a></li>
                            <li><a href="#/" className="text-common-link my-3">Arrependimento</a></li>
                            <li><a href="#/" className="text-common-link my-3">Cancelamento</a></li>
                            <li><a href="#/" className="text-common-link my-3">Meus Pedidos</a></li>
                            <li><a href="#/" className="text-common-link my-3">Guia de Segurança Digital</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul style={{listStyle:"none"}}>
                            <li><p className="text-luxury font-weight-bold">Super Shoes Empresas</p></li>
                            <li><a href="#/" className="text-common-link my-3">MarketPlace Super Shoes</a></li>
                            <li><a href="#/" className="text-common-link my-3">Vendas Para Empresas</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul style={{listStyle:"none"}}>
                            <li><p className="text-luxury font-weight-bold">Central de Relacionamento</p></li>
                            <li><a href="#/" className="mx-4 btn btn-outline-info" style={{borderRadius: 30}}>Tire Suas Dúvidas</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul style={{listStyle:"none"}}>
                            <li><p className="text-luxury font-weight-bold">Permaneça Conectado</p></li>
                            <li>
                                <div className="mx-3">
                                    <a href="#/"><i class="fab fa-facebook fa-2x text-info mr-2"></i></a>
                                    <a href="#/"><i class="fab fa-instagram fa-2x text-info mr-2"></i></a>
                                    <a href="#/"><i class="fab fa-twitter fa-2x text-info mr-2"></i></a>
                                    <a href="#/"><i class="fab fa-youtube fa-2x text-info mr-2"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainFooter;