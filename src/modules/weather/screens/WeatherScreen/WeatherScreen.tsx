import React from 'react';
import { Text, SafeAreaView } from '@app/core/components';
import { Image } from 'react-native';
import { welcome1 } from '../../../../assets';

export const WeatherScreen = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Text>Weather Forecast!</Text>
      <Image
        source={welcome1}
        style={{
          width: 100,
          height: 100,
        }}
      />
    </SafeAreaView>
  );
};
