import React from 'react';

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
        this.intervalID = 0;
    }   

    tick() {
        this.setState({time: new Date()});
    }

    timeString() {
        return this.state.time.toTimeString();
    }

    dateString() {
        return this.state.time.toDateString();
    }

    render() {
        return (
            <div className="clock">
                <h1>Clock</h1>
                <div className="clock-container">
                    <div className="clock-item">
                        <strong>Time:</strong>
                        <strong>{this.timeString()}</strong>
                    </div>
                    <div className="clock-item">
                        <strong>Date:</strong>
                        <strong>{this.dateString()}</strong>
                    </div>
                </div>
            </div>
        );
    }
}
