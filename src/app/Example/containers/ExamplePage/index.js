import React from 'react';
import IntlTranslate from '@/common/utils/IntlTranslate';
import { connect } from 'react-redux';
import { add, remove } from '@/app/Example/actions';
import { Button, Value } from '@/app/Example/components';
import ButtonCancelIcon from '@/common/images/button-cancel-icon.png';
import ButtonOkIcon from '@/common/images/button-ok-icon.png';
import PropTypes from 'prop-types';

const Page = ({ addValue, removeValue, value }) => (
  <div>
    <Button onClick={addValue} image={ButtonOkIcon}>
      <IntlTranslate id="button.add" />
    </Button>
    <Value>{value}</Value>
    <Button onClick={removeValue} image={ButtonCancelIcon}>
      <IntlTranslate id="button.remove" />
    </Button>
  </div>
);

Page.propTypes = {
  addValue: PropTypes.func,
  removeValue: PropTypes.func,
  value: PropTypes.number,
};

const mapStateToProps = ({ example }) => {
  const { value } = example;
  return { value };
};

export default connect(mapStateToProps, {
  addValue: add,
  removeValue: remove,
})(Page);
