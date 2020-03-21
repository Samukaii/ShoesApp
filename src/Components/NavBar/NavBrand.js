import React, { Component } from 'react';

class NavBrand extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                    <a href="#/" className="navbar-brand text-light">{this.props.title}</a>
                    <button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target={"#" + this.props.ocultId} aria-controls={this.props.ocultId} aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars text-light"></i>
                    </button>
            </div>
        );
    }
}

export default NavBrand;