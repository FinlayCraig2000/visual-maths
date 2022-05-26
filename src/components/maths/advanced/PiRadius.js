import React from "react";
import { CommonInput } from "../../common/common-input";
import { CommonResult } from "../../common/common-result";
import { CommonMathsTitle } from "../../common/common-maths-title";
import { defaultText, mathsText, decimalPlaces } from "../../../helper/defaultText";
import { BasicDisplayComponent } from "../../common/basic-display";
import { DescriptionToggleComponent } from "../../common/description-toggle";
import { MathsTitleAboveContainer } from "../../common/maths-above-container";
import { CommonMathFlexDisplay } from "../../common/common-math-flex-display";
import { piRadius } from "../../../helper/calculations";
import { CircleGrapic } from "../../common/graphics/circle";
import { CommonDivideSymbol } from "../../common/symbols/common-divide-symbol";

export class AdvancedMathsPiRadius extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: defaultText.resultText,
            valueA: undefined,
            descriptionToggle: false,
            highlightToggle: false,
        };

        this.calculation = this.calculation.bind(this);
        this.toggleDescription = this.toggleDescription.bind(this);
        this.toggleHightlight = this.toggleHightlight.bind(this);
    };

    toggleHightlight() {
        this.setState({ highlightToggle: !this.state.highlightToggle });
    };

    toggleDescription() {
        this.setState({ descriptionToggle: !this.state.descriptionToggle });
    };

    calculation() {
        // Check when there is nothing in text box
        if (this.state.valueA === undefined) {
            this.setState({result: defaultText.resultText})
            return
        }

        let a = piRadius(this.state.valueA, decimalPlaces.two);

        this.setState({result: a});
    };

    render() {
        return (
            <div className="advanced-pi-component">

                <MathsTitleAboveContainer>
                    <CommonMathsTitle
                        className="pi"
                        title="Pi - Radius"
                    />

                    <DescriptionToggleComponent 
                        onClick={this.toggleDescription}
                    />
                </MathsTitleAboveContainer>

                <BasicDisplayComponent
                    basic={true}
                >
                    <CommonMathFlexDisplay
                        flexDirection="column"
                    >
                        <CommonInput
                            className="addition-input-a-component"
                            id="first"
                            placeholder={mathsText.Cirumference}
                            onChange={x => {
                                this.setState({valueA: x}, this.calculation)
                            }}
                            onMouseEnter={this.toggleHightlight}
                            onMouseLeave={this.toggleHightlight}
                        />

                        <CommonDivideSymbol />

                        <span>2 * π</span>
                    </CommonMathFlexDisplay>

                    <CommonResult 
                        result={this.state.result}
                    />
                </BasicDisplayComponent>

                <BasicDisplayComponent 
                    basic={false}
                    extended={this.state.descriptionToggle}
                >
                    <p>π π π</p>
                    <CircleGrapic
                        id="radius"
                        highlight={this.state.highlightToggle.toString()}
                    />
                </BasicDisplayComponent>
            </div>
        )
    };
}