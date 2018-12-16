import React from 'react';
import type { Children } from 'react';
import styles from './index.scss';

type PropTypes = {
  children: Children,
};

const Value = (props: PropTypes) => {
  const { children } = props;

  return (
    <div className={styles.value} {...props}>
      {children}
    </div>
  );
};

export default Value;
