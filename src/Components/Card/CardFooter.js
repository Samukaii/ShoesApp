import React, { Component } from 'react';

class CardFooter extends Component {
    state = {  }
    render() { 
        return (  
            <div className="card-footer">
                {this.props.children}
            </div>
        );
    }
}
 
export default CardFooter;