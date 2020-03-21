import React, { Component } from 'react';

class ModalFooter extends Component {
    state = {  }
    render() { 
        return (  
            <div class="modal-footer">
                {this.props.children}
            </div>
        );
    }
}
 
export default ModalFooter;