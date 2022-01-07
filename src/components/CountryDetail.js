import React from 'react';

const CountryDetail = ({selectedCountry, addToFavourites}) => {
    
    const handleClick = () => {
        addToFavourites(selectedCountry);
    }

    return(
        <div>
            <h2>{selectedCountry.name.common}</h2>
            <p>{selectedCountry.flag}</p>
            <p>{selectedCountry.population}</p>
            <button onClick={handleClick}>Add to Favourites</button>

        </div>
    )
    
}

export default CountryDetail;