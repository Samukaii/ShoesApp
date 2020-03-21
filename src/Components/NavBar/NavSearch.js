import React, { Component } from 'react';

class NavSearch extends Component {
    state = {  }
    render() { 
        return (  
            <div className="mx-auto">
                <form className="form-inline">
                    <input size={this.props.size} type="search" className="form-control rounded-pill my-2" placeholder={this.props.children} aria-label="Search"/>
                    <button type="button" className="btn btn-info rounded-pill"><i class="fas fa-search"></i></button>
                </form>
            </div>
        );
    }
}
 
export default NavSearch;