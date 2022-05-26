import React from "react";

import { Link } from 'react-router-dom';
import { DarkModeToggleContainer } from "./settings/toggle-background";
import { linkPathsTypeface } from "../helper/pathsTypeface";
import "./NavigationBar.css"

export class NavigationBar extends React.Component {
    render() {
        return (
            <header className="navigation-bar-container">
                <nav className="navigation-bar-component">
                    <Link to={`${linkPathsTypeface.Default}`}>Home</Link>
                    <Link to={`${linkPathsTypeface.BasicMaths}`}>Basic Maths</Link>
                    <Link to={`${linkPathsTypeface.AdvancedMaths}`}>Advanced Maths</Link>
                </nav>

                <DarkModeToggleContainer />
            </header>
        )
    }
}