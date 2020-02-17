import React from "react"; 

/*
Name
Type
Age - Young, Adult, Senior 
*/ 

export default function Animal({name, animal, breed, media, location, id}) {
    let placeImg = 'http://placecorgi.com/300/300';
    if(media.length) {
        placeImg = media[0].small;
    }

    return (
        <a href={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={placeImg} alt={name} /> 
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${location}`}</h2>
            </div>
        </a>
    )
}