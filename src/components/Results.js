import React from 'react';
import Animal from './Animal';

const Results = ({ pets }) => {
    return (
        <div className="search">
            {pets.length === 0 ? <h1>No Animals Found</h1> : (
                pets.map(pet => (
                    <Animal 
                        animal={pet.type}
                        key={pet.id}
                        name={pet.name}
                        breed={pet.breeds.primary}
                        media={pet.photos}
                        location={`${pet.contact.address.city}, ${
                            pet.contact.address.state
                        }`}
                        id={pet.id}
                    />
                ))
            )}
        </div>
    )
}

export default Results; 