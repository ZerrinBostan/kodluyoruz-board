import React, { useContext } from 'react';
import ListDropdown from '../components/List/ListDropdown';
import ListAddItem from '../components/List/ListAddItem';
import listContext from '../stores/listContext';

const Home = () => {
  const { createdList } = useContext(listContext);
  return (
    <div className="board-wrapper">
      <div className="board-wrapper__item">
        <ListDropdown />
        <ListAddItem />
      </div>
      <div className="board-wrapper__item">
        <ListDropdown />
      </div>
      <div className="board-wrapper__item">
        <ListDropdown />
      </div>
      <div className="board-wrapper__item">
        <ListDropdown />
      </div>
      <div className="board-wrapper__item">
        <ListDropdown />
      </div>
      <div className="board-wrapper__item">
        <ListDropdown />
      </div>
      <div className="board-wrapper__item">
        <ListDropdown />
      </div>
    </div>
  );
};

export default Home;
