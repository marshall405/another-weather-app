import React from 'react';

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: 0
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
                this.setState({zip: 0});
                e.target.value = '';
            } 
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' maxLength='5' placeholder='enter zipcode' onChange={this.handleUserInput} />
            </form>
        )
    }
}