import React from "react";
import Nav from "react-bootstrap/Nav";
import FilterContainer from "./FilterContainer";
import { VisibilityFilters } from "./actions";

class FilterOptions extends React.Component {
  render() {
    return (
      <Nav variant="tabs" defaultActiveKey="All">
        <FilterContainer filter={VisibilityFilters.SHOW_ALL}>
          All
        </FilterContainer>
        <FilterContainer filter={VisibilityFilters.SHOW_ACTIVE}>
          Don't Do
        </FilterContainer>
        <FilterContainer filter={VisibilityFilters.SHOW_COMPLETED}>
          Accidentally Done
        </FilterContainer>
      </Nav>
    );
  }
}

export default FilterOptions;
