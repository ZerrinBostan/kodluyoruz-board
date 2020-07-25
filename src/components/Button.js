import React from 'react';
import Icon from './Icon';

const Button = ({ className, callback, text }) => (
  <div className="list-dropdown__confirmation-content">
    <button type="button" className={className} onClick={callback}>
      <span>{text}</span>
      <Icon
        icon="chevrons-down"
        className="icon icon-chevrons-down"
        size={16}
      />
    </button>
  </div>
);

export default Button;
