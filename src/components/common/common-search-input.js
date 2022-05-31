import React from "react";
import { CommonInput } from "./common-input";

import "./common-search-input.css"

export class CommonSearch extends React.Component {
    render() {
        return (
            <div className="search-container">
                <CommonInput
                    className="search-input"
                    onChange={this.props.onChange}
                    placeholder="Search"
                />
            </div>
        )
    }
}