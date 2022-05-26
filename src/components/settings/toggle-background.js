import React from "react";

import "./toggle-background.css"

export class DarkModeToggleContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: localStorage.getItem("dark-mode") || false,
            text: "🌑"
        };

        this.clickHandler = this.clickHandler.bind(this);
    };

    componentDidMount() {
        this.loadDarkMode();
    };
    
    componentWillUnmount() {
        this.loadDarkMode();
    };

    /**
     * Parse the string from localStorage to a boolean
     */
    parseLocalStorage() {
        return JSON.parse(localStorage.getItem("dark-mode"))
    };

    localStorageToggle() {
        localStorage.setItem("dark-mode", !this.state.isActive);
    };

    loadDarkMode() {
        this.setState({ isActive: this.parseLocalStorage()}, () => this.changeBackgroundChecks());
    };

    toggleActive() {
        this.setState({ isActive: !this.state.isActive }, () => this.changeBackgroundChecks(), this.localStorageToggle());
    };

    changeBackgroundChecks() {
        if (this.state.isActive) {
            document.documentElement.setAttribute("dark", "");
            this.setState({text: "🌕"})
            
        } else {
            document.documentElement.removeAttribute("dark", "");
            this.setState({text: "🌑"})
        }
    };
    
    clickHandler() {
        this.toggleActive();
    };

    render() {
        return(
            <div className="background-colour-container">
                <button onClick={this.clickHandler} className="background-toggle-mode">
                    <span>
                        Toggle dark mode:
                    </span>
                    <span>
                        {this.state.text}
                    </span>
                </button>
            </div>
        );
    }
}