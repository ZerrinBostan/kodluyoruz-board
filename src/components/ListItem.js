import React, { PureComponent } from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cardDelete, cardUpdate } from '../stores/todo/actions';
import Button from '../components/Button';

class ListItem extends PureComponent {
  state = {
    color: '',
    degree: '',
    desc: this.props.data.description,
  };

  handleChangeColorDegree = () => {
    const { data } = this.props;

    switch (data.degree) {
      case '1':
        this.setState({ color: '#f8b195' });
        break;
      case '2':
        this.setState({ color: '#f67280' });
        break;
      case '3':
        this.setState({ color: '#c06c84' });
        break;
      case '4':
        this.setState({ color: '#c06c84' });
        break;
      case '5':
        this.setState({ color: '#6c567b' });
        break;
      default:
        this.setState({ color: '#3b2e5a' });
    }
  };

  handleDegreeChange = (e) => {
    this.setState({ degree: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({desc: e.target.value });
  };

  handleDeleteItem = (e) => {
    e.preventDefault();
    const { data: { id } } = this.props;
    const { cardDelete } = this.props;
    cardDelete(id);
  };

  handleUpdateItem = (e) => {
    e.preventDefault();
    const { data: { id, degree, description, categoryId } } = this.props;

    const { cardUpdate } = this.props;
    cardUpdate({ id, degree, description, categoryId });
  };

  componentDidMount() {
    this.handleChangeColorDegree();
  }

  render() {
    const { color, desc } = this.state;

    const { data: { title, degree }, userName } = this.props;

    const {
      handleDegreeChange,
      handleDescriptionChange,
      handleDeleteItem,
      handleUpdateItem,
    } = this;
    
    return (
      <div className="list-add-content">
        <div className="list-add-content__header">
          <div className="list-add-content__header--task">
            <div type="button" onClick={handleDeleteItem}>
              <Icon icon="clipboard-remove" size={16} />
            </div>
            <span>{title || 'Title Alanı'}</span>
            <Icon icon="arrow-right" size={16} />
          </div>
          <span>{userName}</span>
        </div>
        <div>
          <textarea
            name="description"
            rows="4"
            cols="50"
            className="list-add-content__description"
            value={desc}
            onChange={handleDescriptionChange}
          />
        </div>
        <p className="list-add-content__header">
          <Icon
            icon="bookmark"
            className="icon icon-bookmark"
            size={20}
            color={color}
            disableFill
          />
          Etiket Derecesi
        </p>
        <div className="list-degree-wrapper">
          <div className="list-add-content__degree">
            <input
              type="number"
              name="degree"
              placeholder="Önemlilik derecesini giriniz."
              className="list-dropdown__degree--input"
              value={degree}
              onChange={handleDegreeChange}
            />
          </div>
        </div>
        <Button
          icon="clipboard-edit"
          callback={handleUpdateItem}
          text="Listeyi düzenle"
          className="action-button action-button-column"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cardDelete: (id) => dispatch(cardDelete(id)),
    cardUpdate: ({ id, degree, description, categoryId }) =>
      dispatch(cardUpdate({ id, degree, description, categoryId })),
  };
};

ListItem.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    degree: PropTypes.bool,
    description: PropTypes.string,
  }).isRequired,
  userName: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(ListItem);
