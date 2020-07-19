import React, { useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const Dropdown = (options = []) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options.options}
    />
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf({
    options: PropTypes.shape({
      userId: PropTypes.number,
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
  }).isRequired,
};
export default Dropdown;
