import React from "react";
import { CommonInput } from "../../common/common-input";
import { CommonMathsTitle } from "../../common/common-maths-title";
import { defaultText, mathsText, squareNumber } from "../../../helper/defaultText";
import { BasicDisplayComponent } from "../../common/basic-display";
import { DescriptionToggleComponent } from "../../common/description-toggle";
import { MathsTitleAboveContainer } from "../../common/maths-above-container";
import { CommonMathFlexDisplay } from "../../common/common-math-flex-display";
import { addition, square } from "../../../helper/calculations";
import { CommonAdditionSymbol } from "../../common/symbols/common-addition-symbol";
import { PythagoreanGrapic } from "../../common/graphics/pythagorean";
import { CommonResult } from "../../common/common-result";

export class AdvancedMathsPythagorean extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: defaultText.resultText,
            valueA: undefined,
            valueB: undefined,
            valueC: undefined,
            descriptionToggle: false,
            highlightToggle: false,
            idToggle: defaultText.default,
        };

        this.calculation = this.calculation.bind(this);
        this.toggleDescription = this.toggleDescription.bind(this);
    };

    toggleHightlight(input) {
        this.setState({ highlightToggle: !this.state.highlightToggle });
        this.toggleID(input);
    };

    toggleID(input) {
        this.setState({ idToggle: input });
    };

    toggleDescription() {
        this.setState({ descriptionToggle: !this.state.descriptionToggle });
    };

    clear() {
        this.setState({valueA: undefined});
        this.setState({valueB: undefined});
        this.setState({valueC: undefined});
    }

    calculation() {
        // Check when there is nothing in text box
        if (this.state.valueA === undefined || this.state.valueB === undefined) {
            this.setState({valueC: undefined})
            return
        }

        let a = addition(square(this.state.valueA, squareNumber.two), square(this.state.valueB, squareNumber.two));

        console.log(a);

        this.setState({valueC: a});
    };

    render() {
        return (
            <div className="advanced-pythagorean-component">

                <MathsTitleAboveContainer>
                    <CommonMathsTitle
                        className="pythagorean"
                        title="Pythagorean"
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
                        <CommonMathFlexDisplay
                            flexDirection="row"
                        >
                            <CommonInput
                                className="pythagorean-input-a-component"
                                id="first"
                                placeholder={mathsText.A}
                                // value={this.state.valueA}
                                onChange={x => {
                                    this.setState({valueA: x}, this.calculation)
                                }}
                                onMouseEnter={() => this.toggleHightlight("a")}
                                onMouseLeave={() => this.toggleHightlight(defaultText.default)}
                            />

                            <CommonAdditionSymbol />
                            
                            <CommonInput
                                className="pythagorean-input-b-component"
                                id="first"
                                placeholder={mathsText.B}
                                // value={this.state.valueB}
                                onChange={x => {
                                    this.setState({valueB: x}, this.calculation)
                                }}
                                onMouseEnter={() => this.toggleHightlight("b")}
                                onMouseLeave={() => this.toggleHightlight(defaultText.default)}
                            />

                            <span>=</span>
                            
                            <CommonInput
                                className="pythagorean-input-c-component"
                                id="first"
                                placeholder={mathsText.C}
                                // value={this.state.valueC}
                                onChange={x => {
                                    this.setState({valueC: x}, this.calculation)
                                }}
                                onMouseEnter={() => this.toggleHightlight("c")}
                                onMouseLeave={() => this.toggleHightlight(defaultText.default)}
                            />
                        </CommonMathFlexDisplay>


                        <CommonResult 
                            result={this.state.result}
                        />
                    </CommonMathFlexDisplay>
                </BasicDisplayComponent>

                <BasicDisplayComponent 
                    basic={false}
                    extended={this.state.descriptionToggle}
                >
                    <p>Pythagorean</p>
                    <PythagoreanGrapic 
                        id={this.state.idToggle}
                        highlight={this.state.highlightToggle}
                    />
                </BasicDisplayComponent>
            </div>
        )
    };
}