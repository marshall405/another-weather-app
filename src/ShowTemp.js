import React from 'react';

import {colorStyles} from './styles/facebookStyles';

const divStyles = {
    color: colorStyles.darkBlue,

}



export const ShowTemp = (props) => {
    if(!props.error){
        return (
            <div style={divStyles}>
                <h1> Weather </h1>
                <h2> {props.city} </h2>
                <h4> {props.sky} </h4>
                <h3> Temp {props.temp}&#8457; </h3>
                <div style={{display:'flex', justifyContent:'space-around', alignItems:'center' }}>
                    <p> Sunrise {props.sunrise} </p>
                    <p> Sunset {props.sunset} </p>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h1> Weather </h1>
                <h2> Something went wrong! </h2>
                <h3> Temp {-10000}&#8457; </h3>
                <h6> {props.errorMessage} </h6>
            </div>
                
        )
    }
    
}