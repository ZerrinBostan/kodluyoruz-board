import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';
import Icon from '../Icon';

const ListDropdown = ({ isShow, options, columnDropdown }) => (
  <>
    {!isShow && (
      <div className="list-dropdown__content">
        {!columnDropdown ? (
          <>
            <input
              type="text"
              name="title"
              placeholder="Lütfen Başlık oluşturunuz."
              className="list-dropdown__context--input"
            />
            <div className="list-dropdown__degree">
              <input
                type="number"
                name="degree"
                placeholder="Önemlilik derecesini giriniz."
                className="list-dropdown__degree--input"
              />
            </div>
            <div className="list-dropdown__textarea">
              <textarea
                name="description"
                rows="4"
                cols="50"
                className="list-add-content__description"
                placeholder="Açıklamanızı giriniz."
              />
            </div>
            <Dropdown options={options} />
          </>
        ) : (
          <input
            type="text"
            name="title"
            placeholder="Lütfen Kategori adını giriniz."
            className="list-dropdown__context--input"
          />
        )}
        <div className="list-dropdown__confirmation-content">
          <div type="button" className="list-dropdown__confirmation" onClick>
            <span>{columnDropdown ? 'Kategori Oluştur' : 'Liste Oluştur'}</span>
            <Icon
              icon="chevrons-down"
              className="icon icon-chevrons-down"
              size={16}
            />
          </div>
        </div>
      </div>
    )}
  </>
);

ListDropdown.defaultProps = {
  isShow: false,
  options: null,
  columnDropdown: false,
};

ListDropdown.propTypes = {
  isShow: PropTypes.bool,
  options: PropTypes.arrayOf({}),
  columnDropdown: PropTypes.bool,
};

export default ListDropdown;
