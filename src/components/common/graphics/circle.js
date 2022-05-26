import React from "react";

import "./circle.css";

// TODO - Organize the circle.css better & more optimized

export class CircleGrapic extends React.Component {
    render() {
        return (
            <svg className="circle-svg-container" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id={this.props.id} data-highlight={this.props.highlight}>
                    <line id="radius" x1="75" x2="115" y1="75" y2="15" />
                    <line id="diameter" x1="145" x2="5" y1="75" y2="75" />

                    <rect x="115" y="35" width="20px" height="20px" transform="skewX(-35)" />

                    <text id="radius" x="92.5" y="49.5">r</text>
                    <text id="diameter" x="70" y="100">d</text>
                    <text id="circumference" x="150" y="80">c</text>

                    <circle id="inner" cx="75" cy="75" r="4" />
                    <circle id="outter" cx="75" cy="75" r="70" />
                </g>
            </svg>
        )
    }
}