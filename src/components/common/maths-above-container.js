import React from "react";

import "./maths-above-container.css"

export class MathsTitleAboveContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="about-maths-title-above-container">
                {this.props.children}
            </div>
        )
    }
}