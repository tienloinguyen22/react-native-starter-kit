import React from 'react';
// import { Navigation } from '@app/core/components';
// import { NavItem } from '@app/core/interfaces';
// import { WeatherScreen } from '@app/modules/weather/screens';
// import { SettingsScreen } from '@app/modules/settings/screens';
import { WelcomeScreen } from './modules/auth/screens';
import { initializeI18Next } from './i18n';

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
  return <WelcomeScreen />;
};
