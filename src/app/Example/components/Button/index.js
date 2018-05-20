import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Button = props => (
    <button className={styles.button} {...props}>
        {props.image &&
            <img
                src={props.image}
                alt="button"
                className={styles.image}
            />
        }
        {props.children}
    </button>
);

Button.propTypes = {
    image: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

Button.defaultProps = {
    image: '',
};

export default Button;
