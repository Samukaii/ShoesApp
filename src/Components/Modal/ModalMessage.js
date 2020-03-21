import React, { Component } from 'react';

class ModalMessage extends Component {
    state = {  }
    render() { 
        return (  
            <div class="modal fade" id={this.props.idModal} tabindex="-1" role="dialog" aria-labelledby={this.props.idModal + "Label"} aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id={this.props.idModal + "Label"}>{this.props.titulo}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ModalMessage;