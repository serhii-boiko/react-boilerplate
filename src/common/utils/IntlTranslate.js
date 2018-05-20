import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

const InjectTranslate = props => <FormattedMessage {...props} />;

export default injectIntl(InjectTranslate, {
    withRef: false,
});
