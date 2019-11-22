import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, getNameById } from '../actions';
import '../styles/postlists.css';
import AuthorName from './AuthorName';
// import jsonPaceholder from "../apis/jsonPlaceholder"
class PostList extends Component {
	constructor(props) {
		super(props);
		this.state = { posts: null, names: null };
		this.renderPosts = this.renderPosts.bind(this);
	}
	componentDidMount() {
		this.props.fetchPosts().then((res) => this.setState({ posts: this.props.posts.data }));
		this.props.getNameById().then((res) => this.setState({ names: this.props.names }));
	}
	renderPosts() {
		if (this.props.id !== null) {
			return this.state.posts.filter((post) => post.userId === parseInt(this.props.id)).map((post) => {
				// console.log(post)
				const userId = `person_${post.userId}`
				return (
					<React.Fragment key={post.id}>
						{/* {console.log(this.props.id)} */}
						<h1>{post.title}</h1>
						<AuthorName idForName = {userId} names = {this.state.names}/>
						<p>{post.body}</p>
					</React.Fragment>
				);
			});
		} else if (this.props.id === null || this.props.id === '') {
			if (!this.state.posts) {
				return (
					<div>
						<h1>Loading</h1>
						{/* <h3>{console.log(this.state.names)}</h3> */}
					</div>
				);
			} else {
				return this.state.posts.map((post) => {
					// this.props.getNameById(post.userId)
					const userId = `person_${post.userId}`;
					return (
						<React.Fragment key={post.id}>
							<h1>{post.title}</h1>
							<h2>{this.state.names ? this.state.names[`${post.userId}`] : null}</h2>
							{/* <h3>{console.log(this.state.names)}</h3> */}
							{/* {this.state.names[userId] ? <h3>{this.state.names[userId]}</h3> : console.log(userId)} */}
							<AuthorName idForName = {userId} names = {this.state.names}/>
							<p>{post.body}</p>
						</React.Fragment>
					);
				});
			}
		}
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
		return <div>{!this.state.posts ? this.loadAnimation() : this.renderPosts()}</div>;
	}
}

const mapStateToPorps = (state) => {
	return state;
};

export default connect(mapStateToPorps, { fetchPosts: fetchPosts, getNameById: getNameById })(PostList);
