import React from "react";
import { MainContainer } from "../../components/common/main-container";
import { CommonMathLayoutComponent } from "../../components/common/common-math-page";

export class CalculusContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <MainContainer>
                <CommonMathLayoutComponent>
                    <h1>Calculus</h1>
                </CommonMathLayoutComponent>
            </MainContainer>
        )
    }
}