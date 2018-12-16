import React from 'react';
import IntlTranslate from '@/common/utils/IntlTranslate';
import { connect } from 'react-redux';
import { add, remove } from '@/app/Example/actions';
import { Button, Value } from '@/app/Example/components';
import ButtonCancelIcon from '@/common/images/button-cancel-icon.png';
import ButtonOkIcon from '@/common/images/button-ok-icon.png';

type Props = {
  addValue: void,
  removeValue: void,
  value: number,
};

class Page extends React.Component<Props> {
  addValue = () => {
    const { addValue } = this.props;
    return addValue();
  };

  removeValue = () => {
    const { removeValue } = this.props;
    return removeValue();
  };

  render() {
    const { value } = this.props;
    return (
      <div>
        <Button onClick={this.addValue} image={ButtonOkIcon}>
          <IntlTranslate id="button.add" />
        </Button>
        <Value>{value}</Value>
        <Button onClick={this.removeValue} image={ButtonCancelIcon}>
          <IntlTranslate id="button.remove" />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ example }) => {
  const { value } = example;
  return { value };
};

export default connect(
  mapStateToProps,
  {
    addValue: add,
    removeValue: remove,
  },
)(Page);
