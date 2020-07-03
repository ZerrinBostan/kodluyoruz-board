import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ListContext = React.createContext();

class ListProvider extends Component {
  state = {
    list: [],
  };

  setList = (list) => {
    this.setState({ list });
  };

  render() {
    const { children } = this.props;
    const { list } = this.state;
    const { setList } = this;

    return (
      <ListContext.Provider
        value={{
          list,
          setList,
        }}
      >
        {children}
      </ListContext.Provider>
    );
  }
}

ListProvider.propTypes = {
  children: PropTypes.element,
};

export default ListContext;

export { ListProvider };
