import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { withRouter, BrowserRouter, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import AppLocale from '@/common/languageProvider';
import PropTypes from 'prop-types';

const ExampleRouter = lazy(() => import('@/app/Example/router'));

const Router = ({ locale }) => {
  console.log(locale);
  const defaultLocale = 'en';
  const currentAppLocale = AppLocale[locale.locale] || AppLocale[defaultLocale];

  return (
    <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={ExampleRouter} />
        </Suspense>
      </BrowserRouter>
    </IntlProvider>
  );
};

Router.propTypes = {
  locale: PropTypes.shape({
    locale: PropTypes.string,
  }),
};

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return {
    locale,
  };
};

export default withRouter(connect(mapStateToProps, {})(Router));
