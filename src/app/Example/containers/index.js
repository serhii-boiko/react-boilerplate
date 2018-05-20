import React from 'react';
import PropTypes from 'prop-types';
import IntlTranslate from '@/common/utils/IntlTranslate';
import ButtonCancelIcon from '@images/button-cancel-icon.png';
import ButtonOkIcon from '@images/button-ok-icon.png';
import { connect } from 'react-redux';
import { add, remove } from '../actions';
import { Button, Value } from '../components';

class Page extends React.Component {
    static propTypes = {
        add: PropTypes.func.isRequired,
        remove: PropTypes.func.isRequired,
        value: PropTypes.number.isRequired,
    };

    add = () => {
        this.props.add();
    };

    remove = () => {
        this.props.remove();
    };

    render() {
        const { value } = this.props;
        return (
            <div>
                <Button onClick={this.add} image={ButtonOkIcon}>
                    <IntlTranslate id="button.add" />
                </Button>
                <Value>{value}</Value>
                <Button onClick={this.remove} image={ButtonCancelIcon}>
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

export default connect(mapStateToProps, {
    add,
    remove,
})(Page);
