import React from "react";
import { tableMathAuthors, tableMathNames } from "../../../helper/mathsTable";
import { linkPathsTypeface } from "../../../helper/pathsTypeface";
import { CommonTableHeader } from "../../common/common-table-header";
import { CommonTableRow } from "../../common/common-table-row";

import "./MathsSearchTable.css"

export class MathsSearchTable extends React.Component {
    render() {
        return (
            <div className="table-container">
                <table id="myTable">
                    <thead>
                        <CommonTableHeader
                                className="header"
                                name="Name"
                                author="Author"
                                description="Description"
                        />
                    </thead>

                    <tbody>
                        <CommonTableRow
                            className={this.props.className}
                            link={linkPathsTypeface.Logarithms}
                            name={tableMathNames.Logrithms}
                            author={tableMathAuthors.JohnNapler}
                            description="1610"
                        />

                        <CommonTableRow
                            className={this.props.className}
                            link={linkPathsTypeface.Calculus}
                            name={tableMathNames.Calculus}
                            author={tableMathAuthors.Newton}
                            description="1668"
                        />

                        <CommonTableRow
                            className={this.props.className}
                            link={linkPathsTypeface.LawOfGravity}
                            name={tableMathNames.LawOfGravity}
                            author={tableMathAuthors.Newton}
                            description="1687"
                        />
                        
                        <CommonTableRow
                            className={this.props.className}
                            link={linkPathsTypeface.EulersFormulaForPolyhedra}
                            name={tableMathNames.EulersFormulaForPolyhedra}
                            author={tableMathAuthors.Euler}
                            description="1751"
                        />
                    </tbody>
                </table>
            </div>
        )
    }
}