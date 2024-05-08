import { useState } from "react";
import "./Country.css"
import "../Countries/Countries.css"
import CountryDetail from "../CountryDetail/CountryDetail";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    // console.log(country);
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    // console.log(handleVisitedCountry)
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h2 style={{ color: visited ? 'Purple' : 'black' }}>Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button> <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit.'} <hr />
            {
                <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
                ></CountryDetail>
            }
        </div >
    );
};

export default Country;