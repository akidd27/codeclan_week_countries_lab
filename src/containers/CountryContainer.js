import React, { useState, useEffect } from 'react';
import CountrySelector from '../components/CountrySelector';

const CountryContainer = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(result => result.json())
        .then(countries => setCountries(countries))
    };

    return(
        <CountrySelector countries={countries}/>
    );
};

export default CountryContainer;