import React, { Component } from "react";

class Greeting extends Component {
   constructor (props){
    super(props)
    this.state={
        user:"vishnu kumar"
    }
   }

   reset = () => {
    this.setState({ user: "poovizhi" });
};
    render() {
        return (
            <div>
                <h1 className="d-flex justify-content-center align-item-center mt-4 bg-dark text-warning">Class-based Greeting</h1>
            <div className="container">
                <div className="text-center text-primary">
                    <h1>Hello {this.state.user}</h1>
                    <button onClick={this.reset} className="btn btn-warning mt-3">
                        Reset User
                    </button>
                </div>
            </div>
            </div>
        );
    }
}

export default Greeting;
