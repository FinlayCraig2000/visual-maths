import React from "react";
import { Link } from 'react-router-dom';
import "./common-table-row.css"

export class CommonTableRow extends React.Component {
    render() {
        return (
            <Link to={this.props.link} style={{display: "contents"}}>    
                <tr className={`${this.props.className ?? "v"}`}>
                    <td>
                        {this.props.name}
                    </td>
                    <td>
                        {this.props.author}
                    </td>
                    <td>
                        {this.props.description}
                    </td>
                </tr>
            </Link>
        )
    }
}