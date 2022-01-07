import React from "react";

const CountrySelector = ({ countries }) => {

    const countryOptions = countries.map((country, index) => {
        return(
            <option value={index} key={index}>{country.name.common}</option>
        );
    });

    return(
        <select defaultValue="">
            <option value="">Choose a country...</option>
            {countryOptions}
        </select>
    )
};

export default CountrySelector;