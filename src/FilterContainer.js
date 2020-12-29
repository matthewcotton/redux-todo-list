import { connect } from "react-redux";
import { setVisibilityFilter } from "./actions";
import FilterLink from "./FilterLink";

function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.VisibilityFilter,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      //  console.log(ownProps.filter)
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
}

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);

export default FilterContainer;
