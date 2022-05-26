import React from "react";
import { CommonInput } from "../common/common-input";
import { defaultText } from "../../helper/defaultText";


export class RelativityContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: defaultText.resultText,
            valueA: undefined,
            valueB: undefined,
            valueC: 299792458,
        };

        this.print = this.print.bind(this);
    }

    print() {
        // When there is nothing in text box
        if (this.state.valueB === undefined || this.state.valueC === undefined) {
            this.setState({result: defaultText.resultText})
            return
        }

        let a = this.state.valueB * Math.pow(this.state.valueC, 2)

        this.setState({valueA: a})
    }

    render() {
        return (
            <div className="square-root-component basic-component-display">
                <div className="square-root-flex-display">
                    
                    <CommonInput
                        className="square-root-input-a-component"
                        value={this.state.valueA}
                        id="first"
                        placeholder="Energy"
                        onChange={x => {
                            this.setState({valueA: x}, this.print)
                        }}
                    />

                    =

                    <CommonInput
                        className="divide-input-b-component"
                        value={this.state.valueB}
                        id="second"
                        placeholder="Mass"
                        onChange={x => {
                            this.setState({valueB: x}, this.print);
                        }}
                    />

                    <CommonInput
                        className="divide-input-b-component"
                        value={this.state.valueC}
                        id="second"
                        placeholder="Speed of Light"
                        onChange={x => {
                            this.setState({valueC: x}, this.print);
                        }}
                    />
                </div>
                
                <span className="result-span-component">= {this.state.result}</span>
            </div>
        )
    }
}