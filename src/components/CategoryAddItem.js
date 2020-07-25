import React, { PureComponent } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { categoryAdd } from '../stores/todo/actions';
import getRandomId from '../helpers/getRandomId';
import Button from './Button';

class CategoryAddItem extends PureComponent {
  state = {
    category: '',
  };

  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value });
  };

  handleCategoryCreate = (e) => {
    const { categoryAdd, handleColumnToogleDropdown } = this.props;
    const { category } = this.state;

    e.preventDefault();
    categoryAdd({ id: getRandomId(), title: category });
    this.setState({ category: '', degree: '', description: '' });
    
    handleColumnToogleDropdown();
  };

  render() {
    const { category } = this.state;
    const { isShow } = this.props;
    const { handleCategoryChange, handleCategoryCreate } = this;
    return (
      <>
        {isShow && (
          <Card>
            <input
              type="text"
              name="title"
              placeholder="Lütfen Kategori adını giriniz."
              className="list-dropdown__context--input"
              value={category}
              onChange={handleCategoryChange}
            />
            <Button
              text={'Liste Oluştur'}
              callback={handleCategoryCreate}
              className="list-dropdown__confirmation"
            />
          </Card>
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    categoryAdd: ({ id, title }) => dispatch(categoryAdd({ id, title })),
  };
};

export default connect(null, mapDispatchToProps)(CategoryAddItem);
