const FavouriteCountries = ({favouriteCountries}) => {

    const favourites = favouriteCountries.map((country, index) => {
            return (
                <li key={index}>{country.name.common}</li>
            )
        })
    
    return (
        <ul>
            {favourites}
        </ul>
    )
}

export default FavouriteCountries;