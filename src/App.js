import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import MyNav from "./MyNav";
import AddTask from "./AddTask";
import FilterOptions from "./FilterOptions";
import VisibleTaskList from "./VisibleTaskList";

class App extends React.Component {
  render() {
    return (
      <div>
        <MyNav />
        <Container>
          <br />
          <AddTask />
          <br />
          <FilterOptions />
          <VisibleTaskList />
        </Container>
      </div>
    );
  }
}

export default App;
