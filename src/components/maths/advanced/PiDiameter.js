import React from "react";
import { CommonInput } from "../../common/common-input";
import { CommonResult } from "../../common/common-result";
import { CommonMathsTitle } from "../../common/common-maths-title";
import { defaultText, mathsText } from "../../../helper/defaultText";
import { BasicDisplayComponent } from "../../common/basic-display";
import { DescriptionToggleComponent } from "../../common/description-toggle";
import { MathsTitleAboveContainer } from "../../common/maths-above-container";
import { CommonMathFlexDisplay } from "../../common/common-math-flex-display";
import { piCircumference } from "../../../helper/calculations";
import { CircleGrapic } from "../../common/graphics/circle";

export class AdvancedMathsPiDiameter extends React.Component {
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

        let a = piCircumference(this.state.valueA);

        this.setState({result: a});
    };

    render() {
        return (
            <div className="advanced-pi-component">

                <MathsTitleAboveContainer>
                    <CommonMathsTitle
                        className="pi"
                        title="Pi - Diameter"
                    />

                    <DescriptionToggleComponent 
                        onClick={this.toggleDescription}
                    />
                </MathsTitleAboveContainer>

                <BasicDisplayComponent
                    basic={true}
                >
                    <CommonMathFlexDisplay
                        flexDirection="row"
                    >
                        <span>2 *</span>

                        <CommonInput
                            className="addition-input-a-component"
                            id="first"
                            placeholder={mathsText.Radius}
                            onChange={x => {
                                this.setState({valueA: x}, this.calculation)
                            }}
                            onMouseEnter={this.toggleHightlight}
                            onMouseLeave={this.toggleHightlight}
                        />
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
                        id="diameter"
                        highlight={this.state.highlightToggle.toString()}
                    />
                </BasicDisplayComponent>
            </div>
        )
    };
}