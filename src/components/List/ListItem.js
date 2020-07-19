import React, { useState, useEffect } from 'react';
import Icon from '../Icon';
import PropTypes from 'prop-types';

const ListItem = ({ data, userName }) => {
  const [color, setColor] = useState("");

  const { title, description, degree } = data;

  const handleChangeColorDegree = () => {
    if (degree === 1) {}
    switch (degree) {
      case 1:
        setColor("#f8b195");
        break;
      case 2:
        setColor("#f67280");
        break;
      case 3:
        setColor("#c06c84");
        break;
      case 4:
        setColor("#c06c84");
        break;
      case 5:
        setColor("#6c567b");
        break;
      default:
        setColor("#3b2e5a");
    }
  }

  useEffect(() => {
    handleChangeColorDegree();
  }, [])

  return (
    <div className="list-add-content">
      <div className="list-add-content__header">
        <div className="list-add-content__header--task">
          <Icon icon="remove" size={16} />
          <span>{title || 'Title Alanı'}</span>
          <Icon icon="arrow-right" size={16} />
        </div>
        <span>{userName}</span>
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
        <Icon
          icon="bookmark"
          className="icon icon-bookmark"
          size={20}
          disableFill
          color={color}
        />
        <span>{degree}</span>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    degree: PropTypes.bool,
    description: PropTypes.string,
  }).isRequired,
  userName: PropTypes.string.isRequired,
};

export default ListItem;
