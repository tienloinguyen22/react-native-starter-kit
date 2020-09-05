import React, { useContext } from 'react';
import { View, StatusBar, Image } from 'react-native';
import _ from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import { ThemeContext } from 'react-native-elements';
import { logo } from '@app/assets';
import { styles } from './SplashScreenStyles';

export const SplashScreen = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.background}>
      <LinearGradient colors={[_.get(theme, 'colors.blue0'), _.get(theme, 'colors.blue10')]} style={styles.background}>
        <StatusBar barStyle='light-content' />
        <View style={styles.logoContainer}>
          <Image source={logo} width={128} />
        </View>
      </LinearGradient>
    </View>
  );
};
