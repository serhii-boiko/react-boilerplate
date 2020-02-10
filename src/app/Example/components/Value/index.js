import React from 'react';
import { ValueSC } from './styles';
import PropTypes from 'prop-types';

const Value = ({ children }) => <ValueSC>{children}</ValueSC>;

Value.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
};

export default Value;
