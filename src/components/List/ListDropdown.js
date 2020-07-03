import React, { useState, useContext } from 'react';
import Icon from '../Icon';
import listContext from '../../stores/listContext';

const ListDropdown = () => {
  const { list, setList } = useContext(listContext);

  const [isShow, setShow] = useState(true);
  const [text, setText] = useState('');
  const [degree, setDegree] = useState(0);
  const [description, setDescription] = useState('');

  const handleOnClick = (e) => {
    const listItem = {
      text,
      degree,
      description,
    };

    const tempList = [...list, listItem];
    setList(tempList);
  };

  const handleToogleDropdown = () => {
    setShow(!isShow);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleChangeDegree = (e) => {
    setDegree(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="list-dropdown">
      <div
        type="button"
        className="list-dropdown__button"
        onClick={handleToogleDropdown}
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
          <div className="list-dropdown__textarea">
            <span className="list-dropdown__degree--text">
              Açıklamanızı giriniz.
            </span>
            <textarea
              name="description"
              rows="4"
              cols="50"
              className="list-add-content__description"
              onChange={handleChangeDescription}
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
