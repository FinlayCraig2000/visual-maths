import React from "react";
import { CommonInput } from "../../common/common-input";
import { CommonResult } from "../../common/common-result";
import { CommonMathsTitle } from "../../common/common-maths-title";
import { defaultText } from "../../../helper/defaultText";
import { BasicDisplayComponent } from "../../common/basic-display";
import { DescriptionToggleComponent } from "../../common/description-toggle";
import { MathsTitleAboveContainer } from "../../common/maths-above-container";
import { CommonMathFlexDisplay } from "../../common/common-math-flex-display";
import { square } from "../../../helper/calculations";

export class AdvancedMathsSquared extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: defaultText.resultText,
            valueA: undefined,
            valueB: undefined,
            descriptionToggle: false,
        };

        this.calculation = this.calculation.bind(this);
        this.toggleDescription = this.toggleDescription.bind(this);
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

        let a = square(this.state.valueA, this.state.valueB);

        this.setState({result: a})
    };

    render() {
        return (
            <div className="advanced-squared-component">

                <MathsTitleAboveContainer>
                    <CommonMathsTitle
                        className="squared"
                        title="Squared"
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
                        <CommonInput
                            className="squared-input-a-component"
                            value={this.state.valueA}
                            id="first"
                            placeholder={defaultText.placeholderTextValueA}
                            onChange={x => {
                                this.setState({valueA: x}, this.calculation)
                            }}
                        />

                        <CommonInput
                            className="squared-input-b-component"
                            value={this.state.valueB}
                            id="second"
                            placeholder={defaultText.placeholderTextValueB}
                            onChange={x => {
                                this.setState({valueB: x}, this.calculation);
                            }}
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
                    <p>TODO Description</p>
                </BasicDisplayComponent>
            </div>
        )
    };
}