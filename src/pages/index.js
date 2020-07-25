import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItem, CategoryAddItem, TaskAddItem, Button } from '../components';

class Home extends PureComponent {
  state = {
    listDropdownShow: true,
    columnDropdownShow: true,
  };

  handleToogleDropdown = () => {
    this.setState({ listDropdownShow: !this.state.listDropdownShow });
  };

  handleColumnToogleDropdown = () => {
    this.setState({ columnDropdownShow: !this.state.columnDropdownShow });
  };

  render() {
    const { categories, cardList } = this.props;
    const { columnDropdownShow, listDropdownShow } = this.state;
    const { handleToogleDropdown, handleColumnToogleDropdown } = this;
    return (
      <>
        <navbar className="navbar">
          <span className="navbar--span">TODO BOARD</span>
          <div className="buttons-wrapper">
            <Button
              text="sütun ekle"
              callback={handleColumnToogleDropdown}
              className={`action-button ${!columnDropdownShow && 'active'}`}
            />
            <CategoryAddItem isShow={columnDropdownShow} />
            <Button
              text="kart ekle"
              callback={handleToogleDropdown}
              className={`action-button ${!listDropdownShow && 'active'}`}
            />
            {categories.length > 0 && (
              <TaskAddItem options={categories} isShow={listDropdownShow} />
            )}
          </div>
        </navbar>
        <div className="board-wrapper">
          {categories.length > 0 &&
            categories.map((categoriesItem) => (
              <div className="board-wrapper__item" key={categoriesItem.id}>
                <span className="board-wrapper__item--text">
                  {categoriesItem?.title}
                </span>
                {cardList.length > 0 &&
                  cardList
                    .filter((item) => item.categoryId === categoriesItem.id)
                    .map((cardItem) => (
                      <ListItem
                        data={cardItem}
                        key={cardItem.id}
                        userName="Zerrin-Bostan"
                      />
                    ))}
                <button
                  type="button"
                  className={`action-button action-button-column ${
                    !listDropdownShow && 'active'
                  }`}
                  onClick={handleToogleDropdown}
                >
                  kart ekle
                </button>
              </div>
            ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.todoReducer.categories,
    cardList: state.todoReducer.cardList,
  };
};

export default connect(mapStateToProps, null)(Home);
