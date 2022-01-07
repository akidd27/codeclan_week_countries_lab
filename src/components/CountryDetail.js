import React from 'react';

const CountryDetail = ({selectedCountry, addToFavourites}) => {
    

    return(
        <div>
            <h2>{selectedCountry.name.common}</h2>
            <p>{selectedCountry.flag}</p>
            <p>{selectedCountry.population}</p>
            <button onClick={addToFavourites}>Add to Favourites</button>

        </div>
    )
    
}

export default CountryDetail;