import React from 'react';

const CountryDetail = ({selectedCountry}) => {
    return(
        <div>
            <h2>{selectedCountry.name.common}</h2>
            <p>{selectedCountry.flag}</p>
            <p>{selectedCountry.population}</p>

        </div>
    )
    
}

export default CountryDetail;