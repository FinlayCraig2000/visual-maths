import React from "react";

import "./common-maths-title.css"

export class CommonMathsTitle extends React.Component {
    render() {
        return (
            <div className="maths-title-container">
                <h3 className={`${this.props.className ?? ""}-title h3`}>
                    {this.props.title}
                </h3>
            </div>
        )
    }
}