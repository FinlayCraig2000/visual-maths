import React from "react";

import "./common-input.css"

export class CommonInput extends React.Component {
    render() {
        return (
            <input
                className={`basic-input ${this.props.className ?? ""}`}
                id={this.props.id}
                maxLength={this.props.maxLength}
                placeholder={this.props.placeholder}
                autoComplete="off"
                onChange={e => {
                    // const digits = e.target.value.replace(/[^0-9]/g, "");
                    // if (digits.length === 0) {
                    //     const a = e.target.value.replace(/[^A-Za-z]/g, "");
                    // }
                    // else {
                    //     this.props.onChange(parseInt(digits));
                    // }
                    this.props.onChange(e.target.value);
                }}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
            />
        )
    }
}