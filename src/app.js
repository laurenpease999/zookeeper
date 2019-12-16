import React from "react";
import ReactDOM from "react-dom";

/*
Name
Type
Age - Young, Adult, Senior 
*/ 
const Animal = ({ name, type, age }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, type),
        React.createElement("h2", {}, age)
    ]);
}; 

const App = () => {
    return React.createElement(
        "div",
        {id: "title"}, [
        React.createElement("h1", {}, "Available for Adoption"),
        React.createElement(Animal, {
            name: "Jasper",
            type: "Red Panda",
            age: "Adult"
        }), 
        React.createElement(Animal, {
            name: "Lily",
            type: "Monkey",
            age: "Young"
        }),
        React.createElement(Animal, {
            name: "George",
            type: "Chimp",
            age: "Senior"
        })       
    ]);
}; 

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);