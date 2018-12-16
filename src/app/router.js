// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import AppLocale from '@/common/languageProvider';
import { router as ExampleRouter } from '@/app/Example';

const Router = ({ locale }: { locale: { locale: string } }) => {
  const defaultLocale = 'en';
  const currentAppLocale = AppLocale[locale.locale] || AppLocale[defaultLocale];

  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <Switch>
        <Route exact path="/" component={ExampleRouter} />
      </Switch>
    </IntlProvider>
  );
};

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return {
    locale,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {},
  )(Router),
);
