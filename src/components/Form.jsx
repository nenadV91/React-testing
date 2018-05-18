import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {text: ""}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		let {text} = this.state;
		if(text) {
			this.setState({text: ""});
		}
	}

	handleChange(event) {
		this.setState({text: event.target.value})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input value={this.state.text} 
				onChange={this.handleChange} 
				type="text"
				name="text"/>
				
				<button 
				onClick={this.handleSubmit} 
				type="submit">Submit</button>
			</form>
		);
	}
}

export default Form;
