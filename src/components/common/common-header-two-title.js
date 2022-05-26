import React from "react";

import "./common-header-two-title.css"

export class CommonHeaderTwo extends React.Component {
    render() {
        return (
            <h2 className={`${this.props.className ?? ""}-title h2`}>
                {this.props.title}
            </h2>
        )
    }
}