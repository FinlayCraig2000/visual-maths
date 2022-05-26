import React from "react";

import "./basic-display.css"

export class BasicDisplayComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        let basicContainer = "basic";

        if(this.props.basic !== true) {
            basicContainer = "description";
        }

        return (
            <div className={`${basicContainer ?? ""}-component-display`} data-extended={this.props.extended}>
                {this.props.children}
            </div>
        )
    }
}