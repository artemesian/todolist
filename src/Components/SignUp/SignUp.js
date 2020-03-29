import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput.js';
import CustomButton from '../CustomButton/CustomButton.js'

import './SignUp.scss';

export default class SignIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      displayName:"",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }
  
  handleSubmit = async event => {
    event.preventDefault();

    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('passwords don\'t match');
      return;
    }

    try {
      
      this.setState({
        displayName:"",
        email: "",
        password: "",
        confirmPassword: ""
      })
    } catch (error)  {
      console.error(error)
    }

  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value})
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign Up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput 
            type="text" 
            name="displayName" 
            handleChange={this.handleChange}
            value={displayName} 
            label="Display Name"
            required/>
          <FormInput 
            type="email" 
            name="email" 
            handleChange={this.handleChange}
            value={email} 
            label="Email"
            required/>
          <FormInput 
            type="password" 
            name="password" 
            handleChange={this.handleChange} 
            value={password} 
            label="Password"
            required/>
          <FormInput 
            type="password" 
            name="confirmPassword" 
            handleChange={this.handleChange} 
            value={confirmPassword} 
            label="Confirm Password"
            required/>
         <div id="buttons">
            <CustomButton
              type="submit">
              SIGN IN
            </CustomButton>
            <a onClick={()=>this.props.setInnerRoute()}> Already Have Account ?</a>
          </div>
        </form> 
      </div>
    )
  }
}
