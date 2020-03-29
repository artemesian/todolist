import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './Pages/HomePage/HomePage.js'
import SignInSignUp from './Components/SignInSignUp/SignInSignUp.js'

import './App.css';

class App extends React.Component {

	render() {
		return (
			<div>
				<Switch>
					<Route path='/' render={() => 
						!this.props.currentUser? 
						(<HomePage/>)
						:
						(<SignInSignUp/>) 
					}/>
				</Switch>
			</div>
			);
	}
}

const mapStateToProps = createStructuredSelector({
})

export default connect(mapStateToProps)(App)