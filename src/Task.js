import React from "react";
import Button from "react-bootstrap/Button";

class Task extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>
          <span
            style={{
              textDecoration: this.props.completed ? "line-through" : "none",
            }}
            onClick={this.props.onClick}
          >
            {this.props.description}
          </span>
        </td>
        <td>
          <Button variant="warning" onClick={this.props.removeClick}>
            Remove
          </Button>
        </td>
      </tr>
    );
  }
}

export default Task;