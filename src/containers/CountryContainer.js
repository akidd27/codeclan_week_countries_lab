import React, {useState, useEffect} from 'react'
import CountryDetail from '../components/CountryDetail';
import CountrySelector from '../components/CountrySelector';
import FavouriteCountries from '../components/FavouriteCountries';


const CountryContainer = () => {
    const [countries, setCountries] =useState([]);
    const [favouriteCountries, setFavouriteCountries] =useState([]);
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

    const getTotalPopulation = () => {
        const reducer = (previousValue, currentCountry) => {
            return previousValue + currentCountry.population;
        }
        return countries.reduce(reducer, 0);
    }

    const addToFavourites = (selectedCountry) => {
        const newFavouriteCountries = favouriteCountries + selectedCountry;
        setFavouriteCountries(newFavouriteCountries);
    }

    

    
    
    return(
        <>
        <p>Global Population: {getTotalPopulation()}</p>
        <CountrySelector countries={countries} onCountrySelected={onCountrySelected}/>
        {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} addToFavourites={addToFavourites} /> : null}
        <FavouriteCountries favouriteCountries={favouriteCountries}/>
        </>
    );
    
};

export default CountryContainer;