import React from "react";
import { CommonHeaderTwo } from "../common/common-header-two-title";

import "./about-page.css";

export class AboutPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="home-page-container">
                <h1> Home Page</h1>
                
                <div className="home-page-about-container">
                    <div className="question-about-container">
                        <CommonHeaderTwo 
                            className="basic"
                            title="What's this website about?"
                        />

                        <p>This website is to help me and maybe others understand more complex maths.</p>

                        <p>I've done this by adding the basic and slowly building up to the harder equations.</p>

                        <p>This will hopefully include more visual helping when diving into the more difficult problems.</p>
                    </div>

                    <div className="question-about-container">
                        <CommonHeaderTwo 
                            className="basic"
                            title="Why create this website?"
                        />

                        <p>There are two reasons for this website being create:</p>
                        
                        <ol>
                            <li>
                                First being that I want to improvement my understanding of
                                react framework. Learning more about javascript as well with
                                the Maths functions.
                            </li>
                            <li>
                                Second reason being that I've always liked Maths but it
                                starts getting too complex for me to read becoming a block
                                of symbols and numbers. I would like to slowly develop a
                                better understanding which in return will help with coding
                                problems.
                            </li>
                        </ol>
                    </div>

                    <div className="question-about-container">
                        <CommonHeaderTwo 
                            className="basic"
                            title="Who created this website?"
                        />
                        <p>
                            This website was created by Finlay Craig. You can check out my
                            <span> <a href="https://finlaycraig2000.github.io/portfolio/" target="_blank" rel="noreferrer">portfilio website</a> </span>
                            for more information about me.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}