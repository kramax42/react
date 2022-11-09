import React from 'react';

export class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.handleButton = this.handleButton.bind(this);
    }
    
    handleButton() {
        this.setState(state => ({count: state.count + 1}))
    };
    
    render() {
       return (
            <div>
                <p> Class counter: {this.state.count} </p>
                <button onClick={this.handleButton}>increment </button>
            </div>
       );
    }
}