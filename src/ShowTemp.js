import React from 'react';

export const ShowTemp = (props) => {
    if(!props.error){
        return (
            <div>
                <h1> Weather </h1>
                <h2> {props.city} </h2>
                <h3> Temp {props.temp}&#8457; </h3>
            </div>
        )
    } else {
        return (
            <div>
                <h1> Weather </h1>
                <h2> Invalid Zipcode </h2>
                <h3> Temp {-10000}&#8457; </h3>
                <h6> {props.errorMessage} </h6>
            </div>
                
        )
    }
    
}