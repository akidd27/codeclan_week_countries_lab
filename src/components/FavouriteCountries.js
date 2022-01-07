const FavouriteCountries = ({favouriteCountries}) => {
    const favourites = favouriteCountries.map((country) => {
            return <li>{country.name}</li>
        })
    
    
    return (
        <ul>
            {favourites}
        </ul>
    )
}

export default FavouriteCountries;