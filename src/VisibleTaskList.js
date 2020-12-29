import { connect } from "react-redux";
import { toggleTask } from "./actions";
import { removeTask } from "./actions";
import VisibleTasks from "./VisibleTasks";

// function getVisibleTasks(tasks, filter) {
//   return (filter === "SHOW_COMPLETED"
//     ? tasks.filter((t) => t.completed)
//     : filter === "SHOW_ACTIVE"
//     ? tasks.filter((t) => !t.completed)
//     : tasks);
// }
  function getVisibleTasks(tasks, filter) {
  // console.log(filter)
  switch (filter) {
    case 'SHOW_COMPLETED':
      return tasks.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return tasks.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      console.log("test1");
      return tasks;
  }
}

function mapStateToProps(state) {
  return {
    tasks: getVisibleTasks(state.tasks, state.VisibilityFilter),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTaskClick: (id) => {
      dispatch(toggleTask(id));
    },
    removeClick: (id) => {
      dispatch(removeTask(id));
    },
  };
}

const VisibleTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTasks);

export default VisibleTaskList;
