import React, { Component } from "react";
import "./style.css";

// NavMessage renders an li tag containing an message for the user

class NavMessage extends Component {
    state = {
        message: ""
        
    };

    componentDidUpdate({ count, topScore }, prevState) {
        

        if (count === 0 && topScore === 0) {
            this.message = "";
        } else if (count === 0 && topScore > 0) {
            this.message = "incorrect";
        } else if (count === 12) {
            this.message = "winner";
        } 
        else {
            this.message = "correct";
        }

        if (count !== this.props.count || this.state.message !== this.message) {
            this.setState({ message: this.message});
        }
    }

    renderMessage = () => {
        switch (this.state.message) {
            case "correct":
                return "You guessed correctly!";
            case "incorrect":
                return "You guessed incorrectly!";
            case "winner":
                return "You've Won! Click to play again.";
            default:
                return "Click an image to begin!";
        }
    };

    render() {
        return (
            <h1
                className={this.message}
                
            >
                {this.renderMessage()}
            </h1>
        );
    }
}

export default NavMessage;