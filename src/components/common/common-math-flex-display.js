import React from "react";
import "./common-math-flex-display.css"

export class CommonMathFlexDisplay extends React.Component {
    render() {
        return (
            <div className={`flex-${this.props.flexDirection} flex-display-row`}>
                {this.props.children}
            </div>
        )
    }
}