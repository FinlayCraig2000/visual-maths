import React from "react";

import "./maths-above-container.css"

export class MathsTitleAboveContainer extends React.Component {
    render() {
        return (
            <div className="about-maths-title-above-container">
                {this.props.children}
            </div>
        )
    }
}