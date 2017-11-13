import React from 'react';

export default class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: "",
        };
    }

    componentDidMount() {
        
    }

    handleInputChange(value) {
        this.setState({ inputVal: value });
    }

    filteredNames() {
        if (!this.state.inputVal) {
            return this.props.listOfNames;
        }

        return this.props.listOfNames.filter((name) => {
            return new RegExp(this.state.inputVal.toLowerCase()).test(name.toLowerCase());
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={(event) => this.handleInputChange(event.currentTarget.value)} value={this.state.inputVal}/>
                <ul>
                    {this.filteredNames().map((name, i) => {
                        return <li key={i} onClick={() => this.handleInputChange(name)}>{name}</li>;
                    })}
                </ul>
            </div>
        );
    }
}
