import './todo-list-styles.css';
import * as React from 'react';

import Todo from './../todo/TodoComponent.js';

export default class TodoList extends React.Component {

    onClickDelete = (index) => {
        this.props.handleClickDelete(index)
    };

    render() {
        return (
            <div>
                {
                    this.props.todos.length
                        ? this.props.todos.map((todo, index) => {
                            return <Todo key={todo.id} text={todo.text}
                                         onClickDelete={() => this.onClickDelete(index)}/>
                        })
                        : 'You\'re all done 🌴'
                }
            </div>
        )
    }
}
