import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const Dropdown = ({ options = [], handleDropdownChange, selectedOption }) => {

  const handleChange = (selectedOption) => {
    handleDropdownChange(selectedOption);
  };

  const mapOptions = () => {
    const newOptions = [...options];
    return newOptions.map((item) => ({ label: item.title, value: item.id }));
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={mapOptions()}
    />
  );
};

Dropdown.propTypes = {
  selectedOption: PropTypes.func.isRequired,
  handleDropdownChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf({
    userId: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};
export default Dropdown;
