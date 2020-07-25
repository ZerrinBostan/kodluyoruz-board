import React, { PureComponent } from 'react';
import Card from './Card';
import Dropdown from './Dropdown';
import getRandomId from '../helpers/getRandomId';
import { connect } from 'react-redux';
import { cardAdd } from '../stores/todo/actions';
import Button from './Button';

class TaskAddItem extends PureComponent {
  state = {
    title: '',
    degree: 0,
    description: '',
    selectedOption: null,
  };

  handleDropdownChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleDegreeChange = (e) => {
    this.setState({ degree: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleCardCreate = (e) => {
    const { cardAdd, handleToogleDropdown} = this.props;
    const { title, degree, description, selectedOption } = this.state;

    e.preventDefault();
    cardAdd({
      id: getRandomId(),
      title,
      degree,
      description,
      categoryId: selectedOption.value,
    });
    this.setState({ title: '', degree: '', description: '' });

    handleToogleDropdown();
  };

  render() {
    const { options, isShow } = this.props;
    const { title, degree, description, selectedOption } = this.state;
    const {
      handleTitleChange,
      handleDegreeChange,
      handleDescriptionChange,
      handleDropdownChange,
      handleCardCreate,
    } = this;

    return (
      <>
        {isShow && (
          <Card>
            <input
              type="text"
              name="title"
              placeholder="Lütfen Başlık oluşturunuz."
              className="list-dropdown__context--input"
              value={title}
              onChange={handleTitleChange}
            />
            <div className="list-dropdown__degree">
              <input
                type="number"
                name="degree"
                placeholder="Önemlilik derecesini giriniz."
                className="list-dropdown__degree--input"
                value={degree}
                onChange={handleDegreeChange}
              />
            </div>
            <div className="list-dropdown__textarea">
              <textarea
                name="description"
                rows="4"
                cols="50"
                className="list-add-content__description"
                placeholder="Açıklamanızı giriniz."
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
            <Dropdown
              options={options}
              handleDropdownChange={handleDropdownChange}
              selectedOption={selectedOption}
            />
            <Button text={'Liste Oluştur'} callback={handleCardCreate} className="list-dropdown__confirmation" />
          </Card>
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cardAdd: ({ id, title, degree, description, categoryId }) =>
      dispatch(cardAdd({ id, title, degree, description, categoryId })),
  };
};

export default connect(null, mapDispatchToProps)(TaskAddItem);
