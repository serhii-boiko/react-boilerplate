import React from 'react';
import { ButtonSC, ImageSC } from './styles';
import PropTypes from 'prop-types';

const Button = ({ image, children, onClick }) => (
  <ButtonSC type="button" onClick={onClick}>
    {Boolean(image) && <ImageSC src={image} alt="button" />}
    {children}
  </ButtonSC>
);

Button.propTypes = {
  image: PropTypes.string,
  children: PropTypes.element,
  onClick: PropTypes.func,
};

export default Button;
