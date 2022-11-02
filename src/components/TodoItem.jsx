import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  state = {
    editing: false,
  }

  completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  };

  handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  render() {
    let viewMode = {}
    let editMode = {}
      
    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    return (
      <div onDoubleClick={this.handleEditing} style={viewMode}>
        <li className="item">
          <input
            type="checkbox"
            className="checkbox"
            checked={this.props.todo.completed}
            onChange={() => this.props.handleChangeProps(this.id)}
          />
          <span style={this.props.todo.completed ? this.completedStyle : null}>{this.props.todo.title}</span>
          <button onClick={() => this.props.deleteTodoProps(this.id)}>Delete</button>
          <input 
          type="text" 
          value={this.props.todo.title}
          style={editMode}
          className="textInput"
          onChange={e => {
            this.props.setUpdate(e.target.value, this.id)
          }}
          onKeyDown={this.handleUpdatedDone}
          />
        </li>
      </div>
    );
  }
}

export default TodoItem;
