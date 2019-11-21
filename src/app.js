const App = React.createElement(
    "div",
    {id: "title"},
    React.createElement("h1", {}, "Available for Adoption"),
    React.createElement(Animal, {
        name: "Jasper",
        type: "Red Panda",
        age: "Adult"
    })
);

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

ReactDOM.render(
    App,
    document.getElementById('root')
);