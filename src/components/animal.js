import React from "react"; 

/*
Name
Type
Age - Young, Adult, Senior 
*/ 

const Animal = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.type}</h2>
            <h2>{props.age}</h2>
        </div>
    )
};

export default Animal; 