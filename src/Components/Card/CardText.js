import React, { Component } from 'react';

class CardText extends Component {
    state = {  }
    render() { 
        return (  
            <div className="card-body">
                <h5 className="card-title">{this.props.titulo}</h5>
                <p className="card-text">
                    {this.props.children}
                </p>
            </div>
        );
    }
}
 
export default CardText;