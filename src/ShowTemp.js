import React from 'react';

import {colorStyles} from './styles/facebookStyles';

const divStyles = {
    color: colorStyles.darkBlue,

}
const errorMessageStyle = {
    color: colorStyles.red
}


export const ShowTemp = (props) => {
    if(!props.error){
        return (
            <div style={divStyles}>
                <h1> Weather </h1>
                <h2> {props.city} </h2>
                <h4> {props.sky} </h4>
                <img src={`http://openweathermap.org/img/w/${props.icon}.png`} />
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
                <h2 style={errorMessageStyle}> Something went wrong! </h2>
                <h3> Temp {-10000}&#8457; </h3>
                <h6 style={errorMessageStyle}> {props.errorMessage} </h6>
            </div>
                
        )
    }
    
}