import React from 'react';

const inputStyle = {
    width: '100%',
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 10
}

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: ''
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserInput(e) {
        const zip = e.target.value;
        this.setState({zip: zip})
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.zip.length === 5) {
            if(!Number.isNaN(Number(this.state.zip))){
                const zipNum = Number(this.state.zip);
                this.props.setZipcode(zipNum);
                this.setState({zip: ''});
            } 
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input style={inputStyle} type='text' maxLength='5' placeholder='enter zipcode' onChange={this.handleUserInput} value={this.state.zip} />
            </form>
        )
    }
}