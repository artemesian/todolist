import React from 'react';
import { connect } from 'react-redux';

import Card from "../../Components/Card/Card.js";
import Spinner from "../../Components/Spinner/Spinner.js";
import { createStructuredSelector } from 'reselect';

import { selectTodosItems } from '../../Redux/todos/todos-selectors.js'

import './List.scss'

class List extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { todos, onGetId } = this.props;
		return (
			<div className="list-container">
      	{(todos.length > 0)?
        	todos.map((todo,i) => <Card key={todo.id} _id={todo.id} todo={todo.value}/>)
      	:
        	"Empty Todo List"
      	}
      	{console.log(this.props)}
    	</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	todos: selectTodosItems
})

export default connect(mapStateToProps)(List);
