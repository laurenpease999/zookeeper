import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from '@reach/router';
import SearchParams from './components/SearchParams.js'; 
import Details from './components/Details.js'; 

const App = () => {
    return (
        <div>
            <h1>Available for Adoption</h1>
            <header>
                <Link to="/">Adopt Me</Link>
            </header>
            <Router>
                <SearchParams path="/" />
                <Details path="/details/:id" />
            </Router>
        </div>
    );
}; 

ReactDOM.render(
    <App />,
    document.getElementById('root')
);