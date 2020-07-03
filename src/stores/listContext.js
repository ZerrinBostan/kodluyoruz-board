import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ListContext = React.createContext();

class ListProvider extends Component {
  state = {
    createdList: false,
    text: '',
    degree: 0,
  };

  isCreatedList = () => {
    this.setState({ createdList: true });
  };

  setTextValue = (isText) => {
    this.setState({ text: isText });
  };

  setDegreeValue = (isDegree) => {
    this.setState({ degree: isDegree });
  };

  render() {
    const { children } = this.props;
    const { createdList, text, degree} = this.state;
    const { isCreatedList, setTextValue , setDegreeValue} = this;

    return (
      <ListContext.Provider
        value={{
          createdList,
          text,
          degree,
          isCreatedList,
          setTextValue,
          setDegreeValue,
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
