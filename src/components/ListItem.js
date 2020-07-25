import React, { PureComponent } from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cardDelete } from '../stores/todo/actions';

class ListItem extends PureComponent {
  state = {
    color: '',
  };

  handleChangeColorDegree = () => {
    const { data = [] } = this.props;

    switch (data.degree) {
      case "1":
        this.setState({ color: '#f8b195' });
        break;
      case "2":
        this.setState({ color: '#f67280' });
        break;
      case "3":
        this.setState({ color: '#c06c84' });
        break;
      case "4":
        this.setState({ color: '#c06c84' });
        break;
      case "5":
        this.setState({ color: '#6c567b' });
        break;
      default:
        this.setState({ color: '#3b2e5a' });
    }
  };

  handleDeleteItem = (e) => {
    e.preventDefault();

    const { cardDelete } = this.props;
    cardDelete(this.props.data.id);
  };

  componentDidMount() {
    this.handleChangeColorDegree();
  }

  render() {
    const { color } = this.state;

    const { data, userName } = this.props;
  
    const { handleDeleteItem } = this;

    return (
      <div className="list-add-content">
        <div className="list-add-content__header">
          <div className="list-add-content__header--task">
            <div type="button" onClick={handleDeleteItem}>
              <Icon icon="remove" size={16} />
            </div>
            <span>{data.title || 'Title Alanı'}</span>
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
            value={data.description}
            readOnly
          />
        </div>
        <p className="list-add-content__header">Etiketler</p>
        <div className="list-degree-wrapper">
          <Icon
            icon="bookmark"
            className="icon icon-bookmark"
            size={20}
            disableFill
            color={color}
          />
          <span>{data.degree}</span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { cardDelete: (id) => dispatch(cardDelete(id)) };
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
