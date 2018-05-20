import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Value = props => (
    <div className={styles.value} {...props}>{props.children}</div>
);

Value.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Value;
