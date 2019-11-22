import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getNameById } from '../actions';

class AuthorName extends Component {
	constructor(props) {
		super(props);
    this.state = { names: this.props.names, idForName: this.props.idForName };
    // this.renderNameById = this.renderNameById.bind(this)
  }
  // componentDidMount(){
  //   this.setState({name: this.props.names[this.props.idForName]})
  // }

	render() {
    const names= this.state.names
    const name  = this.state.idForName
		return (
      <React.Fragment>
        <h2>{names[name]? names[name]: null}</h2>
        <p>{console.log(names[name])}</p>
      </React.Fragment>
      )
	}
}

// const mapStateToProps = (state) => {
// 	return state;
// };

// export default connect(mapStateToProps, { getNameById: getNameById })(AuthorName);

export default AuthorName