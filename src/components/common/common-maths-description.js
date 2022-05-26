import React from "react";

import "./common-maths-description.css"

export class CommonMathsTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="maths-description-container">
                {this.props.children}
            </div>
        )
    }
}