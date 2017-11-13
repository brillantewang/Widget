import React from 'react';
import ReactDOM from 'react-dom';
import {Clock} from "./clock.jsx";
import Weather from "./weather.jsx";
import AutoComplete from "./autocomplete.jsx";

const listOfNames = [
    "Abba",
    "Barney",
    "Barbara",
    "Jeff",
    "Jenny",
    "Sarah",
    "Sally",
    "Xander",
];

class Root extends React.Component {
    render() {
        return (
            <div>
                <Clock/>
                <Weather/>
                <AutoComplete listOfNames={listOfNames}/>
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', function(event) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
);

