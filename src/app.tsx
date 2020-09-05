import React from 'react';
// import { Navigation } from '@app/core/components';
// import { NavItem } from '@app/core/interfaces';
// import { WeatherScreen } from '@app/modules/weather/screens';
// import { SettingsScreen } from '@app/modules/settings/screens';
import { ThemeProvider } from 'react-native-elements';
import { initializeI18Next } from './i18n';
import { theme } from './core/theme';
import { SplashScreen } from './modules/auth/screens/SplashScreen/SplashScreen';

// const navItems: NavItem[] = [
//   {
//     name: 'weather',
//     title: 'Weather',
//     component: WeatherScreen,
//     icon: 'thought-bubble-outline',
//     iconFocused: 'thought-bubble',
//   },
//   {
//     name: 'settings',
//     title: 'Settings',
//     component: SettingsScreen,
//     icon: 'settings-outline',
//     iconFocused: 'settings',
//   },
// ];

initializeI18Next();

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <SplashScreen />
    </ThemeProvider>
  );
};
