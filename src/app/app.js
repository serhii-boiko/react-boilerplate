import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import AppLocale from '@/common/languageProvider';
import Example from '@/app/Example';

const { containers: ExampleContainers } = Example;

const App = ({ locale }) => {
    const defaultLocale = 'en';
    const currentAppLocale = AppLocale[locale.locale] || AppLocale[defaultLocale];
    return (
        <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}
        >
            <ExampleContainers />
        </IntlProvider>
    );
};

App.propTypes = {
    locale: PropTypes.shape({
        locale: PropTypes.string.isRequired,
    }).isRequired,
};

const mapStateToProps = ({ settings }) => {
    const { locale } = settings;
    return {
        locale,
    };
};

export default connect(mapStateToProps, { })(App);
