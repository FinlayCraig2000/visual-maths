import React from "react";

import "./pythagorean.css";

// TODO - Organize the circle.css better & more optimized

export class PythagoreanGrapic extends React.Component {
    render() {
        return (
            <svg className="pythagorean-svg-container" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id={this.props.id} data-highlight={this.props.highlight}>

                    <text id="a" x="92.5" y="49.5">r</text>
                    <text id="b" x="70" y="100">d</text>
                    <text id="c" x="150" y="80">c</text>

                    <polygon id="a" points="0,50 50,50 50,100 0,100" />
                    <polygon id="b" points="50,100 100,100 100,150 50,150" />
                    <polygon id="c" points="50,50 100,100 150,50 100,0" />
                </g>
            </svg>
        )
    }
}