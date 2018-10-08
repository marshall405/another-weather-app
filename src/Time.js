import React from 'react';


const styles = {
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    fontSize: 16,
    display: 'inline'
}
const flexStyle = {
    display:'flex', 
    justifyContent:'space-between', 
    alignItems:'center' 
}
export class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            hour: '',
            min: '',
            sec: '',
            midday: '',
            military: this.props.military,
        }
        this.handleClick = this.handleClick.bind(this);
        this.getDate = this.getDate.bind(this);
    }
    
    componentDidMount() {
        this.updateTime();
        setInterval( () => this.updateTime(), 1000);
    }
    updateTime() {
        const date = new Date();
        let stringDate = '';
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let midday = '';
        if(!this.state.military && hour > 12){
            const standardHour = hour - 12;
            midday = hour < 12 ? 'AM' : 'PM';
            hour = standardHour;
        }
        if(min < 10){
            const minWith0 = `0${min}`;
            min = minWith0;
        }
        if(sec < 10){
            const secWith0 = `0${sec}`;
            sec = secWith0;
        }
        if(this.props.date) {
            stringDate = date.toLocaleDateString();
        }
        this.setState({
            date: stringDate,
            hour: hour,
            min: min,
            sec: sec,
            midday: midday,
        });
    }
    switchMilitaryTime() {
        const isMilitary = this.state.military ? false : true;
        this.setState({military: isMilitary});
    }
    getDate() {
        const date = new Date();
        return date.toLocaleDateString();
      }
    handleClick() {
        this.switchMilitaryTime();
        
    }
    
    render() {
        if(this.state.date){
            return (
                <div style={flexStyle}>
                    <h6 style={styles}> {this.state.date} </h6>
                    <h6 style={styles} onClick={this.handleClick}> {`${this.state.hour}:${this.state.min}:${this.state.sec} ${this.state.midday}`} </h6>
                </div>
            )
        }
        return (
            <div>
                <h6 style={styles} onClick={this.handleClick}> {`${this.state.hour}:${this.state.min}:${this.state.sec} ${this.state.midday}`} </h6>
            </div>
        )
    }   
}
