import React, { useContext } from 'react';
import ListDropdown from '../components/List/ListDropdown';
import ListAddItem from '../components/List/ListAddItem';
import listContext from '../stores/listContext';

const Home = () => {
  const { list } = useContext(listContext);
  return (
    <div className="board-wrapper">
      <div className="board-wrapper__item">
        {list.length === 0 && <ListDropdown />}
        {list.map((item) => (
          <ListAddItem
            text={item.text}
            degree={item.degree}
            description={item.description}
          />
        ))}
      </div>
      <div className="board-wrapper__item">
        {list.length === 0 && <ListDropdown />}
        {list.map((item) => (
          <ListAddItem
            text={item.text}
            degree={item.degree}
            description={item.description}
          />
        ))}
      </div>
      <div className="board-wrapper__item">
        {list.length === 0 && <ListDropdown />}
        {list.map((item) => (
          <ListAddItem
            text={item.text}
            degree={item.degree}
            description={item.description}
          />
        ))}
      </div>
      <div className="board-wrapper__item">
        {list.length === 0 && <ListDropdown />}
        {list.map((item) => (
          <ListAddItem
            text={item.text}
            degree={item.degree}
            description={item.description}
          />
        ))}
      </div>
      <div className="board-wrapper__item">
        {list.length === 0 && <ListDropdown />}
        {list.map((item) => (
          <ListAddItem
            text={item.text}
            degree={item.degree}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
