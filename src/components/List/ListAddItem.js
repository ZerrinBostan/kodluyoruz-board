import React, { useContext } from 'react';
import UserContext from '../../stores/userContext';
import listContext from '../../stores/listContext';
import Icon from '../Icon';

const ListAddItem = () => {
  const user = useContext(UserContext);
  const { isCreatedList, text, degree } = useContext(listContext);
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
export default ListAddItem;