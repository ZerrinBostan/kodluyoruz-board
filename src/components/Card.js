import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children }) => (
  <div className="list-dropdown__content">{children}</div>
);

Card.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Card;
