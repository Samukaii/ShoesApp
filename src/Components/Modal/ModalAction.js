import React, { Component } from 'react';

class ModalAction extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <button type="button" class={"btn " + this.props.cor} data-toggle="modal" data-target={"#" + this.props.idModal}>
                {this.props.botao}
                </button>
            </div>
        );
    }
}
 
export default ModalAction;