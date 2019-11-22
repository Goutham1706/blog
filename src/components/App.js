import React from 'react';
import PostList from './PostList';
// import GetPostsByName from './GetPostsByName';
import { connect } from 'react-redux';
import { fetchPosts, getId, getNameById } from '../actions';

class App extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
		// [1,2,3,4,5,6,7,8,9,10].map(i => this.props.getNameById(i))
		// this.props.getNameById()
		// console.log(this.props.names)
		// setTimeout(() => {console.log(this.props.names["person_10"])}, 10000)
	}
	render() {
		return (
			<div className="container">
				{/* <GetPostsByName /> */}
				<PostList />
				{/* {console.log(this.props)} */}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return state;
};
export default connect(mapStateToProps, { fetchPosts: fetchPosts, getId: getId, getNameById: getNameById })(App);
