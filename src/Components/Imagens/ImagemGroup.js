import React, { Component } from 'react';

class ImagemGroup extends Component
{
    render()
    {
        const p = this.props;
        return(
            <div className="d-flex justify-content-center">
                <ul className={"list-group list-group-flush list-group-horizontal"}>
                {p.children}
                </ul>
            </div>

        );
    }
}

export default ImagemGroup;