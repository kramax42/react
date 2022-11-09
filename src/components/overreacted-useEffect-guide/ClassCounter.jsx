import React from "react";

// Output to console after mounting and 3 button clicks:
// Class count:  0
// Class count:  0
// Class count:  3
// Class count:  3
// Class count:  3
export class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("Class count: ", this.state.count);
    }, 3000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      console.log("Class count: ", this.state.count);
    }, 3000);
  }

  render() {
    return (
      <div>
        <p>Class counter: {this.state.count} </p>
        <button onClick={this.handleButton}>increment </button>
      </div>
    );
  }
}
