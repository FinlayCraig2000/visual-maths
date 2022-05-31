import React from "react";
import { mathsText } from "../../../helper/defaultText";

import "./pythagorean.css";

// TODO - Organize the circle.css better & more optimized

export class PythagoreanGrapic extends React.Component {
    render() {
        return (
            <svg className="pythagorean-svg-container" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id={this.props.id} data-highlight={this.props.highlight}>
                    <polygon id="a" points="0,50 50,50 50,100 0,100" />
                    <polygon id="b" points="50,100 100,100 100,150 50,150" />
                    <polygon id="c" points="50,50 100,100 150,50 100,0" />

                    <text id="a" x="18" y="80">{mathsText.A}</text>
                    <text id="b" x="68" y="130">{mathsText.B}</text>
                    <text id="c" x="93" y="55">{mathsText.C}</text>
                </g>
            </svg>
        )
    }
}