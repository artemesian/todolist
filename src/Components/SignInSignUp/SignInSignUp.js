import React from "react";

import SignIn from '../SignIn/SignIn.js'
import SignUp from '../SignUp/SignUp.js'

import './SignInSignUp.scss';

export default class SignInSignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			signin: true
		}
	}

	setInnerRoute = () => this.setState({signin: !this.state.signin})

	render() {
		return (
		<div className="sign-in-and-sign-up">
    	<div id="title">
    		TODO-LIST APP
    	</div>
    	<div>
    	{this.state.signin?
      	<SignIn setInnerRoute={this.setInnerRoute}/>
      	:
      	<SignUp setInnerRoute={this.setInnerRoute}/>	
    	}
    	</div>
    </div>
		);
	}
}
