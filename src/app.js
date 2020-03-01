import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from '@reach/router';
import SearchParams from './components/SearchParams.js'; 
import Details from './components/Details.js'; 

const App = () => {
    return (
        <div>
            <header>
                <div className="adoption"><Link to="/">Available for Adoption</Link></div>
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