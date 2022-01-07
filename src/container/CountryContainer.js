import React, {useState, useEffect} from 'react'
import CountryDetail from '../components/CountryDetail';
import CountrySelector from '../components/CountrySelector';

const CountryContainer = () => {
    const [countries, setCountries] =useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() =>{
        getCountries();
    }, [])

    const getCountries = () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(result => result.json())
        .then(countries => setCountries(countries))
        
    }

    const onCountrySelected = (country) => {
        setSelectedCountry(country);
        
    }

    return(
        <>
        <CountrySelector countries={countries} onCountrySelected={onCountrySelected}/>
        {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null}
        </>
    );
    
};

export default CountryContainer;