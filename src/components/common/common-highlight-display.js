import React from "react";

import "./common-highlight-display.css"

export class CommonHighlightDisplay extends React.Component {
    render() {
        return (
            <div className="result-container">
                <span className="result-span-component">
                    <span className="equals-span-component">=</span>
                    {this.props.result}
                </span>
            </div>
        )
    }
}