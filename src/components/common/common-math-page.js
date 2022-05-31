import React from "react";
import "./common-math-page.css"

export class CommonMathLayoutComponent extends React.Component {
    render() {
        return (
            <div className="math-page-layout-component">
                {this.props.children}
            </div>
        )
    }
}