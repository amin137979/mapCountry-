import React from 'react'

export default function Info({info ,flag}) {
    return (
        <div className="card">
            <img className="card-img-top" src={flag} alt="Card cap" />
            {info &&
             <ul className="list-group list-group-flush">
                <li className="list-group-item">Capital: {info.capital}</li>
                <li className="list-group-item">Official luages: {info.officialLanguages}</li>
                <li className="list-group-item">Population: {convertNumbertoMillion(info.populationEstimate)} </li>
             </ul>
            }
           
        </div>
    )
}
function convertNumbertoMillion (labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(labelValue));

    


}

