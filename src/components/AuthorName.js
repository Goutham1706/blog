import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNameById } from '../actions';

class AuthorName extends Component {
	componentDidMount(){
	  this.props.getNameById(this.props.id)
	}
	render() {
		const uId = this.props.id;
		const user = this.props.names.find((user) => {
      // console.log(typeof uId)
      return parseInt(uId) === user.id});
		if (!user) {
			return null;
		}
		return (
			<React.Fragment>
				<h2>{`${uId}: ${user.name}`}</h2>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps, { getNameById: getNameById })(AuthorName);

// export default AuthorName
