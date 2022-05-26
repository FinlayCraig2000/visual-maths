import React from "react";
import { CommonMathsTitle } from "./common-maths-title";

import "./description-toggle.css"

export class DescriptionToggleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="maths-description-toggle-container" onClick={this.props.onClick}>
                <CommonMathsTitle 
                    className={"toggle-description"}
                    title={"Toggle"}
                />

            </div>
        )
    }
}