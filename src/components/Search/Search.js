import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.modules.css';

export default function Search(props) {
  const { placeholder, onChange, onSubmit, value } = props
  return (
    <form className={styles.root} onSubmit={onSubmit}>
      <input onChange={onChange} placeholder={placeholder} type="text" value={value} />
    </form>
  )
}

Search.defaultProps = {
  onChange: () => {},
  onSubmit: () => {},
  placeholder: '',
  value: '',
};

Search.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

