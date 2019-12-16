import React from "react";
import ReactDOM from "react-dom";
import SearchParams from './components/SearchParams.js'; 

const App = () => {
    return (
        <div>
            <h1>Available for Adoption</h1>
            <SearchParams />
        </div>
    );
}; 

ReactDOM.render(
    <App />,
    document.getElementById('root')
);