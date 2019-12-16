import React from "react";
import ReactDOM from "react-dom";
import Animal from "./components/animal"

const App = () => {
    return (
        <div>
            <h1>Available for Adoption</h1>
            <Animal name="Jasper" type="Red Panda" age="Adult" />
            <Animal name="Lily" type="Monkey" age="Young" />
            <Animal name="George" type="Chimp" age="Senior" />
        </div>
    );
}; 

ReactDOM.render(
    <App />,
    document.getElementById('root')
);