import React, {Component}  from 'react';

class AddItem extends Component {
    state = {
        todo_item: '',
        date: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.todo_item.value === '' || e.target.date.value === ''){
            return false
        }else{
            this.props.addItem(this.state);
            this.setState({
            todo_item: '',
            date: ''
        })
        } 
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="todo_item" type="text" placeholder="Enter Todo Item ..." id="todo_item" onChange={this.handleChange} value={this.state.todo_item}/>
                    <input className="date" type="text" placeholder="Enter Date ..." id="date" onChange={this.handleChange} value={this.state.date}/>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default AddItem