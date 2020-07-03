import React, { useState, useContext } from 'react';
import Icon from '../Icon';
import listContext from '../../stores/listContext';

const ListDropdown = () => {
  const {
    isCreatedList,
    setTextValue,
    setDegreeValue,
    text,
    degree,
  } = useContext(listContext);

  const [isShow, setShow] = useState(false);

  const handleOnClick = (e) => {
    setShow(!isShow);
    isCreatedList(true);
    e.preventDefault();
  };

  const handleChangeText = (e) => {
    setTextValue(e.target.value);
  };

  const handleChangeDegree = (e) => {
    setDegreeValue(e.target.value);
  };

  return (
    <div className="list-dropdown">
      <div
        type="button"
        className="list-dropdown__button"
        onClick={handleOnClick}
      >
        <span>Liste Oluştur</span>
        <Icon icon="plus" className="icon icon-plus" size={16} />
      </div>

      {!isShow && (
        <div className="list-dropdown__content">
          <input
            type="text"
            name="title"
            placeholder="Lütfen Başlık oluşturunuz."
            className="list-dropdown__context--input"
            value={text}
            onChange={handleChangeText}
          />
          <div className="list-dropdown__degree">
            <span className="list-dropdown__degree--text">
              Önemlilik derecesini giriniz.
            </span>
            <input
              type="number"
              name="degree"
              placeholder="0"
              className="list-dropdown__degree--input"
              value={degree}
              onChange={handleChangeDegree}
            />
          </div>
          <div className="list-dropdown__confirmation-content">
            <div
              type="button"
              className="list-dropdown__confirmation"
              onClick={handleOnClick}
            >
              <span>Liste Oluştur</span>
              <Icon
                icon="chevrons-down"
                className="icon icon-chevrons-down"
                size={16}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListDropdown;
