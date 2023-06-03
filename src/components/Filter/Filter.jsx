import { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterContainer, FilterField } from './Filter.styled';

export class Filter extends Component {
  handleChange = event => {
    this.props.onFilterChange(event.target.value);
  };

  render() {
    return (
      <FilterContainer>
        <label>
          Find contacts by name or number
          <FilterField type="text" name="filter" onChange={this.handleChange} />
        </label>
      </FilterContainer>
    );
  }
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
