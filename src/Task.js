import React from "react";
import Button from "react-bootstrap/Button";

class Task extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td onClick={this.props.onClick}>
          <span
            style={{
              textDecoration: this.props.completed ? "line-through" : "none",
            }}
          >
            {this.props.description}
          </span>
        </td>
        <td>
          <Button
            className="done-btn"
            variant="warning"
            onClick={this.props.onClick}
          >
            {this.props.completed ? "Undone" : "Done"}
          </Button>
          <Button
            className="remove-btn"
            variant="warning"
            onClick={this.props.removeClick}
          >
            Remove
          </Button>
        </td>
      </tr>
    );
  }
}

export default Task;
