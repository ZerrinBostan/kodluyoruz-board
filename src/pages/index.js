import React, { useState } from 'react';

import ListDropdown from '../components/List/ListDropdown';
import ListItem from '../components/List/ListItem';
import columnData from '../components/temp-column.json';
import optionData from '../components/temp-todo-category.json';

const Home = () => {
  const [columnItem, setColumnItem] = useState(columnData);
  const [listDropdownShow, setListDropdownShow] = useState(true);
  const [columnDropdownShow, setColumnDropdownShow] = useState(true);

  const setList = (columnData) => {
    setColumnItem(columnData);
  };

  const handleToogleDropdown = () => {
    setListDropdownShow(!listDropdownShow);
  };

  const handleColumnToogleDropdown = () => {
    setColumnDropdownShow(!columnDropdownShow);
  };

  return (
    <>
      <navbar className="navbar">
        <span className="navbar--span">TODO BOARD</span>
        <div className="buttons-wrapper">
          <button
            type="button"
            className={`action-button ${!columnDropdownShow && 'active'}`}
            onClick={handleColumnToogleDropdown}
          >
            sütun ekle
          </button>
          <ListDropdown
            setList={setList}
            isShow={columnDropdownShow}
            columnDropdown
          />
          <button
            type="button"
            className={`action-button ${!listDropdownShow && 'active'}`}
            onClick={handleToogleDropdown}
          >
            kart ekle
          </button>
          <ListDropdown
            setList={setList}
            isShow={listDropdownShow}
            options={optionData}
          />
        </div>
      </navbar>
      <div className="board-wrapper">
        {columnItem.map((columItem) => (
          <div className="board-wrapper__item" key={columItem.id}>
            <span
              className="board-wrapper__item--text"
              key={columItem.taskItem?.taskId}
            >
              {columItem?.title}
            </span>
            {columItem.task.map((taskItem) => (
              <>
                <ListItem
                  data={taskItem}
                  key={taskItem.taskId}
                  userName={columItem.userName}
                />
              </>
            ))}
            <button
              type="button"
              className={`action-button action-button-column ${!listDropdownShow && 'active'}`}
              onClick={handleToogleDropdown}
            >
              kart ekle
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
