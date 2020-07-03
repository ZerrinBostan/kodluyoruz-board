import React, { useContext } from 'react';
import UserContext from '../../stores/userContext';
import Icon from '../Icon';
import PropTypes from 'prop-types';

const ListAddItem = ({text, degree, description}) => {
  const user = useContext(UserContext);
  return (
    <div className="list-add-content">
      <div className="list-add-content__header">
        <span>{text || 'Title Alanı'}</span>
        <span>{user.fullName}</span>
      </div>
      <div>
        <textarea
          name="description"
          rows="4"
          cols="50"
          className="list-add-content__description"
          value={description}
          readOnly
        />
      </div>
      <p className="list-add-content__header">Etiketler</p>
      <div className="list-degree-wrapper">
        <Icon icon="bookmark" className="icon icon-bookmark" size={20} />
        <span>{degree}</span>
      </div>
    </div>
  );
};

ListAddItem.propTypes = {
  text: PropTypes.string.isRequired,
  degree: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired, 
};

export default ListAddItem;
