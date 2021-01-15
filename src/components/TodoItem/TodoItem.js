import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoItem = (props) => {
    const {items, deleteItem} = props;
    let length = items.length;
    const ListItems = length ? (items.map(item => {
        return (
            <div key={item.id}>
                <span className="todo_item">{item.todo_item}</span>
                <span className="date">{item.date}</span>
                <span className="action icon" onClick={() => deleteItem(item.id)}><FontAwesomeIcon icon={faTrash} /></span>
            </div>
        )
    })) : (
        <p>There is no items to show</p>
    )
    return (
        <div className="ListItems">
            <div className="title">
                <span className="todo_item">Todo Item</span>
                <span className="date">Date</span>
            </div>
            {ListItems}
        </div>
    );
}

export default TodoItem;