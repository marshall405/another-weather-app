import React from 'react';


export class Time extends React.Component {
    state = {
        hour: '',
        min: '',
        sec: '',
        midday: ''
    }
    componentDidMount() {
        this.updateTime();
        setInterval( () => this.updateTime(), 1000);
    }
    updateTime() {
        const date = new Date();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        const midday = hour < 12 ? 'AM' : 'PM';
        if(min < 10){
            const minWith0 = `0${min}`;
            min = minWith0;
        }
        if(sec < 10){
            const secWith0 = `0${sec}`;
            sec = secWith0;
        }
        
        this.setState({
            hour: hour,
            min: min,
            sec: sec,
            midday: midday
        });
    }

    render() {
        return (
            <h6> {`${this.state.hour}:${this.state.min}:${this.state.sec} ${this.state.midday}`} </h6>
        )
    }   
}