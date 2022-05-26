import React from "react";
import { MainContainer } from "../components/common/main-container";

export class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <MainContainer>
                <div className="error-page-component">
                    404 ErrorPage
                </div>
            </MainContainer>
        )
    }
}