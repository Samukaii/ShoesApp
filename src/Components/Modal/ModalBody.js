import React, { Component } from 'react';

class ModalBody extends Component {
    state = {  }
    render() { 
        return (  
        <div class="modal-body">
            {this.props.children}
        </div>
        );
    }
}
 
export default ModalBody;