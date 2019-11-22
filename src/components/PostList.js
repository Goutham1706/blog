import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, getNameById } from '../actions';
import '../styles/postlists.css';
import AuthorName from './AuthorName';
// import jsonPaceholder from "../apis/jsonPlaceholder"
class PostList extends Component {
	constructor(props) {
		super(props);
		this.state = { posts: this.props.posts, names: this.props.names };
		this.renderPosts = this.renderPosts.bind(this);
	}
	renderPosts(props) {
		return props.posts.map((post) => {
			const userId = `${post.userId}`;
			return (
				<React.Fragment key={post.id}>
					{/* {console.log(this.props)} */}
					<h1><span>{post.id}</span> {post.title}</h1>
					{/* <h3>{props.names[userId]}</h3> */}
					<AuthorName id = {userId}/>
					<p>{post.body}</p>
				</React.Fragment>
			);
		});
	}
	loadAnimation() {
		return (
			<React.Fragment>
				<div id="load">
					<div>G</div>
					<div>N</div>
					<div>I</div>
					<div>D</div>
					<div>A</div>
					<div>O</div>
					<div>L</div>
				</div>
			</React.Fragment>
		);
	}
	render() {
		return this.renderPosts(this.props);
	}
}

const mapStateToPorps = (state) => {
	return state;
};

export default connect(mapStateToPorps, { fetchPosts: fetchPosts, getNameById: getNameById })(PostList);
