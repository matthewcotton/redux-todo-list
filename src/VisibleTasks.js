import React from "react";
import Table from "react-bootstrap/Table";
import Task from "./Task";

class VisibleTasks extends React.Component {
  render() {
    return (
      <Table hover size="sm">
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              onClick={() => this.props.onTaskClick(task.id)}
              removeClick={() => this.props.removeClick(task.id)}
            />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default VisibleTasks;