import React from "react";
import { MainContainer } from "../components/common/main-container";
import { AdvancedMathsRoot } from "../components/maths/advanced/Root";
import { AdvancedMathsSquared } from "../components/maths/advanced/Squared";
import { AdvancedMathsPiCircumference } from "../components/maths/advanced/PiCircumference";
import { AdvancedMathsPiDiameter } from "../components/maths/advanced/PiDiameter";
import { AdvancedMathsPiRadius } from "../components/maths/advanced/PiRadius";
import { AdvancedMathsPythagorean } from "../components/maths/advanced/Pythagorean";
import { CommonMathLayoutComponent } from "../components/common/common-math-page";

export class AdvancedMaths extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <MainContainer>
                <CommonMathLayoutComponent>
                    <h1>Advanced Maths page</h1>

                    <AdvancedMathsRoot />
                    <AdvancedMathsSquared />
                    <AdvancedMathsPiCircumference />
                    <AdvancedMathsPiDiameter />
                    <AdvancedMathsPiRadius />
                    <AdvancedMathsPythagorean />
                </CommonMathLayoutComponent>
            </MainContainer>
        )
    }
}