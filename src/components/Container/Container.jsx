import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.scss';

const propTypes = {
  children: PropTypes.node.isRequired
};

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      { children }
    </div>
  );
};

Container.propTypes = propTypes;

export default Container;