import React from "react";
import { MainContainer } from "../components/common/main-container";
import { AboutPageContainer } from "../components/descriptions/about-page";

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <MainContainer>
                <AboutPageContainer />
            </MainContainer>
        )
    }
}