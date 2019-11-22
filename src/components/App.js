import React from 'react';
import PostList from './PostList';
import GetPostsByName from "./GetPostsByName"
import {connect} from "react-redux"


const App = (props) => {
	return (
		<div className="container">
			<GetPostsByName/>
			<PostList />
			{/* {console.log(props)} */}
		</div>
	);
};
const mapStateToProps = (state) =>{
	return state
}
export default connect(mapStateToProps)(App)
