import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getId, getNameById } from '../actions';

class GetPostsByName extends Component {
	constructor(props) {
		super(props);
		this.state = { input: null };
		this.changeHandler = this.changeHandler.bind(this);
	}
	changeHandler(e) {
		this.setState({ input: e.target.value });
		this.props.getId(e.target.value);
		this.props.getNameById()
	}
	render() {
		return (
			<form action="/action_page.php">
				<label htmlFor="id">Select posts by id:   </label>
				<select id = "id" name="cars" onChange = {this.changeHandler}>
					<option value="all">all</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps, { getId: getId , getNameById: getNameById})(GetPostsByName);
