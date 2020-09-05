import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { initializeI18Next } from './i18n';
import { theme } from './core/theme';
import { SplashScreen } from './modules/auth/screens/SplashScreen/SplashScreen';

initializeI18Next();

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <SplashScreen />
    </ThemeProvider>
  );
};
