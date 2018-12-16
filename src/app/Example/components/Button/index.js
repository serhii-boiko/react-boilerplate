// @flow

import * as React from 'react';
import styles from './index.scss';

type PropTypes = {
  image: string,
  children: React.Node,
};

const Button = (props: PropTypes) => {
  const { button: buttonStyle, image: imageStyle } = styles;
  const { image, children } = props;

  return (
    <button type="button" className={buttonStyle} {...props}>
      {Boolean(image) && (
        <img src={image} alt="button" className={imageStyle} />
      )}
      {children}
    </button>
  );
};

export default Button;
