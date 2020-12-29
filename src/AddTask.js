import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux';
import { addTask } from './actions';

class AddTask extends React.Component {
  render() {
    let input;
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          this.props.dispatch(addTask(input.value));
          input.value = "";
        }}
      >
        <Form.Label>Enter description of a task not to do:</Form.Label>
        <Form.Control
          className="input-area"
          as="textarea"
          rows="2"
          ref={(node) => {
            input = node;
          }}
        />
        <Button className="add-btn" variant="warning" type="submit">
          Add
        </Button>
      </Form>
    );
  }
}

export default connect() (AddTask);
