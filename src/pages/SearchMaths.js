import React from "react";
import { MainContainer } from "../components/common/main-container";
import { CommonMathLayoutComponent } from "../components/common/common-math-page";
import { MathsSearchTable } from "../components/maths/search/MathsSearchTable";
import { CommonSearch } from "../components/common/common-search-input";
// import { tableMathAuthors, tableMathNames } from "../helper/mathsTable";

export class SearchMaths extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            tableDisplay: []
        };
    }

    // TODO - code from online but isn't meant for react
    handleSearch() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = this.state.searchValue;
        filter = input.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
                }
            }
        }
    }

    render() {
        return (
            <MainContainer>
                <CommonMathLayoutComponent>
                    <h1>Search Maths</h1>
                    
                    <CommonSearch
                        onChange={x => {
                            this.setState({searchValue: x}, this.handleSearch)
                        }}
                    />
                    <MathsSearchTable
                        // className={this.state.tableDisplay}
                    />
                </CommonMathLayoutComponent>
            </MainContainer>
        )
    }
}