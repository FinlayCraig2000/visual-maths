import React from "react";

import "./common-table-header.css"

export class CommonTableHeader extends React.Component {
    render() {
        return (
            <tr className={`${this.props.className ?? "v"}`}>
                <th>
                    {this.props.name}
                </th>
                <th>
                    {this.props.author}
                </th>
                <th>
                    {this.props.description}
                </th>
            </tr>
        )
    }
}