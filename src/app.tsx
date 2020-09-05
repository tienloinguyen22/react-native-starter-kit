import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'react-native-elements';
import { connect } from 'react-redux';
import { initializeI18Next } from './i18n';
import { theme } from './core/theme';
import { SplashScreen } from './modules/auth/screens/SplashScreen/SplashScreen';
import { RootState } from './store';

initializeI18Next();

interface RematchState {
  currentUserId: string;
}

export const BaseApp = (props: RematchState): JSX.Element => {
  const { currentUserId } = props;
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (loading && currentUserId) {
      setLoading(false);
    }
  }, [currentUserId, loading]);

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <SplashScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <SplashScreen />
    </ThemeProvider>
  );
};

const mapStateToProps = (state: RootState): RematchState => ({ currentUserId: state.userProfile._id });

export const App = connect(mapStateToProps)(BaseApp);
