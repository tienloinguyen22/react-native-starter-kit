import React from 'react';
import { Button as BaseButton, ButtonProps } from 'react-native-elements';
import { styles } from './ButtonStyles';

export const Button = (props: ButtonProps): JSX.Element => {
  const { containerStyle, titleStyle, ...restProps } = props;
  return (
    <BaseButton
      containerStyle={[styles.containerStyle, containerStyle]}
      titleStyle={[styles.titleStyle, titleStyle]}
      {...restProps}
    />
  );
};
