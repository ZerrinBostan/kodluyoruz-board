import React from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';

const Button = ({ className, callback, text, icon, ...props }) => (
  <div className="list-dropdown__confirmation-content" {...props}>
    <button type="button" className={className} onClick={callback}>
      <span>{text}</span>
      <Icon icon={icon || 'chevrons-down'} className="icon icon-chevrons-down" size={16} />
    </button>
  </div>
);

Button.defaultProps = {
  icon: '',
};

Button.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Button;
