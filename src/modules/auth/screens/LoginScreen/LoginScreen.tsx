import React from 'react';
import { loginBackground, logo } from '@app/assets';
import { View, ImageBackground, Image } from 'react-native';
import { Text, Button } from '@app/core/components';
import { useTranslation } from 'react-i18next';
import { styles } from './LoginScreenStyles';

export const LoginScreen = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ImageBackground source={loginBackground} style={styles.background}>
        <View style={styles.contentContainer}>
          <View style={styles.logoContainer}>
            <Image source={logo} width={128} />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>{t('login.title')}</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <Button title={t('login.facebook')} type='secondary' containerStyle={styles.loginButtonContainer} />
            <Button title={t('login.google')} type='secondary' containerStyle={styles.loginButtonContainer} />
            <Button title={t('login.apple')} type='secondary' containerStyle={styles.loginButtonContainer} />
          </View>

          <View>
            <Text style={styles.note}>{t('login.weDoNotStore')}</Text>
          </View>

          <View>
            <Button title={t('login.loginLater')} type='clear' containerStyle={styles.loginButtonContainer} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
