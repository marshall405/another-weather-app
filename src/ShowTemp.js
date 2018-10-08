import React from 'react';
import { Time } from './Time';
import {colorStyles} from './styles/facebookStyles';
import { Input } from './Input';
const divStyles = {
    color: colorStyles.darkBlue,
    backgroundColor: colorStyles.grey,
    padding: 10,
    borderRadius: 10,
    minHeight: 450
}
const centerStyle = {
    textAlign: 'center'
}
const errorMessageStyle = {
    marginTop: 150,
    color: colorStyles.red,
    
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
    const displayInfo = () => {
        if(!props.error){
            return (
                <div>
                    <h2> {props.city} </h2>
                    <h1 style={{margin: 5, fontSize: 54}}> {props.temp}&#8457; </h1>
                    <img style={{margin: '10px 0 50px 0'}} src={`http://openweathermap.org/img/w/${props.icon}.png`} alt={`${props.sky} skies`} />
                    <div style={flexStyle}>  
                        <p> Sunrise {props.sunrise} </p>  
                        <p> Sunset {props.sunset} </p>
                    </div>
                    <h5> {props.sky} </h5>
                </div>
            )
        } else {
            return (
                <div>
                    <h2 style={errorMessageStyle}> {props.errorMessage} </h2>
                </div>
            )
        }
    }

    return (
        <div style={divStyles}>
            <Time date={true} military={false}/> 
            <div style={{margin: 20}}>
                <Input setZipcode={props.setZipcode}/>
            </div>
            <div style={centerStyle}>
                {displayInfo()}
            </div>
            <footer style={footerStyle}> Weather App Made Possible By <a href='https://openweathermap.org/'>openweathermap</a></footer>
        </div>
    )
  
    
}