import React from "react";

import "./main-container.css"

export class MainContainer extends React.Component {
    render() {
        return (
            <main className="main-container">
                {this.props.children}
            </main>
        )
    }
}