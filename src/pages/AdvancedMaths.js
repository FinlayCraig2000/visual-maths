import React from "react";
import { MainContainer } from "../components/common/main-container";
import { AdvancedMathsRoot } from "../components/maths/advanced/Root";
import { AdvancedMathsSquared } from "../components/maths/advanced/Squared";
import { AdvancedMathsPiCircumference } from "../components/maths/advanced/PiCircumference";
import { AdvancedMathsPiDiameter } from "../components/maths/advanced/PiDiameter";
import { AdvancedMathsPiRadius } from "../components/maths/advanced/PiRadius";
import { AdvancedMathsPythagorean } from "../components/maths/advanced/Pythagorean";
import "./BasicMaths.css"

export class AdvancedMaths extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <MainContainer>
                <div className="basic-math-page-component">
                    <h1>Maths+ page</h1>

                    <AdvancedMathsRoot />
                    <AdvancedMathsSquared />
                    <AdvancedMathsPiCircumference />
                    <AdvancedMathsPiDiameter />
                    <AdvancedMathsPiRadius />
                    <AdvancedMathsPythagorean />
                </div>
            </MainContainer>
        )
    }
}