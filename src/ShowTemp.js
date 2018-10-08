import React from 'react';
import { Time } from './Time';
import {colorStyles} from './styles/facebookStyles';

const divStyles = {
    color: colorStyles.darkBlue,
}
const errorMessageStyle = {
    color: colorStyles.red
}
const flexStyle = {
    display:'flex', 
    justifyContent:'space-around', 
    alignItems:'center' 
}
const footerStyle = {
    position: 'absolute', 
    bottom: 20,left:0, 
    width: '100%', 
    textAlign: 'center'
}
export const ShowTemp = (props) => {
    if(!props.error){
        return (
            <div style={divStyles}>
                <Time /> 
                <h2> {props.city} </h2>
                <h1> {props.temp}&#8457; </h1>

                <div style={flexStyle}>  
                    <p> Sunrise {props.sunrise} </p>  
                    <h2> {props.date} </h2>
                    <p> Sunset {props.sunset} </p>
                </div>
                <h3> {props.sky} </h3>
                <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt={`${props.sky} skies`} />

                <footer style={footerStyle}> Weather App Made Possible By <a href='https://openweathermap.org/'>openweathermap</a></footer>
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