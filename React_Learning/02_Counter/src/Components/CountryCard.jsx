/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function CountryCard({name, flag, abadi, region, capital}) {
    return (
        <div>
            <a className="country-card" href="/country.html?name=South Georgia">
                <img src={flag} alt={name + 'flag'} />
                <div className="card-text">
                    <h3 className="card-title">{name}</h3>
                    <p><b>Population: </b>{abadi}</p>
                    <p><b>Region: </b>{region}</p>
                    <p><b>Capital: </b>{capital}</p>
                </div>
            </a>
        </div>
    )
}
