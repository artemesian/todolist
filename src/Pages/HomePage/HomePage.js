import React from 'react';
import { connect } from 'react-redux';

import List from '../List/List.js';
import AddButton from '../../Components/AddButton/AddButton.js'
import FormInput from '../../Components/FormInput/FormInput.js'

import { addTodo } from '../../Redux/todos/todos-actions.js';

import './HomePage.scss';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoInput:""
		}
	}

	handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value})
	}

	handleSubmit = () => {
		if(!this.state.todoInput){
			alert("enter todo")
		}
		else {
			this.props.addTodo(this.state.todoInput)

			this.setState({todoInput:""})
		}		
	}

	render() {
		return (
		<div className="homepage">
    	<div>
    		<FormInput 
    			type="text"
    			name="todoInput" 
          handleChange={this.handleChange}
          value={this.state.todoInput}  
          placeholder="What Todo..."
          onKeyDown={(e)=>e.keyCode===13? this.handleSubmit():null}
          />
    		<AddButton handleSubmit={this.handleSubmit}/>
    	</div>
    	<List/>
    </div>
		);
	}
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch =>({
	addTodo: (todo)=>dispatch(addTodo(todo))
})

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)
