import React from "react";
import { CommonInput } from "../../common/common-input";
import { CommonResult } from "../../common/common-result";
import { CommonMathsTitle } from "../../common/common-maths-title";
import { defaultText } from "../../../helper/defaultText";
import { BasicDisplayComponent } from "../../common/basic-display";
import { DescriptionToggleComponent } from "../../common/description-toggle";
import { MathsTitleAboveContainer } from "../../common/maths-above-container";
import { CommonMathFlexDisplay } from "../../common/common-math-flex-display";
import { CommonDivideSymbol } from "../../common/symbols/common-divide-symbol";
import { divide } from "../../../helper/calculations";

export class BasicDivide extends React.Component {
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
    }

    toggleDescription() {
        this.setState({ descriptionToggle: !this.state.descriptionToggle });
    }

    calculation() {
        // Check when there is nothing in text box
        if (this.state.valueA === undefined || this.state.valueB === undefined) {
            this.setState({result: defaultText.resultText})
            return
        }

        let a = divide(this.state.valueA, this.state.valueB)

        this.setState({result: a})
    }

    render() {
        return (
            <div className="basic-divide-component">

                <MathsTitleAboveContainer>
                    <CommonMathsTitle
                        className="division"
                        title="Division"
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
                            className="divide-input-a-component"
                            id="first"
                            placeholder={defaultText.placeholderTextValueA}
                            onChange={x => {
                                this.setState({valueA: x}, this.calculation)
                            }}
                        />

                        <CommonDivideSymbol />

                        <CommonInput
                            className="divide-input-b-component"
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
    }
}