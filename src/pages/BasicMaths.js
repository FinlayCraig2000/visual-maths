import React from "react";
import { MainContainer } from "../components/common/main-container";
import { BasicAddition } from "../components/maths/basic/Additon";
import { BasicSubtract } from "../components/maths/basic/Subtract";
import { BasicMultiply } from "../components/maths/basic/Multiply";
import { BasicDivide } from "../components/maths/basic/Divide";
import { CommonMathLayoutComponent } from "../components/common/common-math-page";

export class BasicMaths extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <MainContainer>
                <CommonMathLayoutComponent>
                    <h1>Basic maths page</h1>

                    <BasicAddition />
                    <BasicSubtract />
                    <BasicMultiply />
                    <BasicDivide />
                </CommonMathLayoutComponent>
            </MainContainer>
        )
    }
}