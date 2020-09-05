import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'react-native-elements';
import { connect, Provider } from 'react-redux';
import { initializeI18Next } from './i18n';
import { theme } from './core/theme';
import { RootState, store } from './store';
import { WelcomeScreen } from './modules/auth/screens';

initializeI18Next();

interface PropsFromRematch {
  isLogin: boolean;
}

const Root = (props: PropsFromRematch): JSX.Element => {
  const { isLogin } = props;
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (loading && isLogin) {
      setLoading(false);
    }
  }, [isLogin]);

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <WelcomeScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <WelcomeScreen />
    </ThemeProvider>
  );
};

const mapState = (state: RootState): PropsFromRematch => ({ isLogin: Boolean(state.userProfile._id) });

const BaseApp = connect(mapState)(Root);

export const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <BaseApp />
    </Provider>
  );
};
