/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import data from '../data'
import CountryCard from './CountryCard';

export default function CountriesList() {

    const array  = data.map((country)=> {
      console.log(country)

     return <CountryCard 
      name={country.name.common} 
      flag={country.flags.svg} 
      abadi={country.population.toLocaleString('en-IN')} 
      region={country.region} 
      capital={country.capital?.[0]}

      />
    })

    
  return (
    <div className='countries-container'>
      {array}
    </div>
  )
}
