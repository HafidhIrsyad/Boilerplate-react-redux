import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.modules.css';

export default function Text(props) {
  const { inputProps, input, className } = props;

  const classes = [ styles.root, className ].filter(Boolean).join(' ');


  return (
    <>
      { inputProps.label && <label className={styles.label}>{inputProps.label}</label> }
      <input className={classes} {...input} {...inputProps} />
    </>
  )
}

Text.defaultProps = {
  className: '',
  input: {},
  inputProps: {},
};

Text.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  inputProps: PropTypes.object,
};
