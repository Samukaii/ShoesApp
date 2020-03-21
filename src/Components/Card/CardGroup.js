import React, { Component } from 'react';

class CardGroup extends Component {
    state = {  }
    render() { 
        return (  
            <div className={"card-group " + this.props.c}>
                {this.props.children}
            </div>
        );
    }
}
 
export default CardGroup;