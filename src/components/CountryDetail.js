import React from 'react';

const CountryDetail = ({selectedCountry}) => {
    return(
        <div>
            <h2>{selectedCountry.name.common}</h2>
            <p>{selectedCountry.flag}</p>
            <p>{selectedCountry.population}</p>



            <h1>HELLO!</h1>
            console.log("Hello")


            
        </div>
    )
    
}

export default CountryDetail;