import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        console.log("Contructor");
        super(props);
        this.state = {
            counter: 0,
        };
    }

    render() {
        console.log("Render");
        return <div className="counter">Counter: {this.state.counter}</div>;
    }
}

export default Counter;
