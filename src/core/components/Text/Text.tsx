import React from 'react';
import { Text as BaseText, TextProps as TextBaseProps } from 'react-native-elements';
import { styles } from './TextStyles';

type TextProps = {
  children?: string;
} & TextBaseProps;

export const Text = (props: TextProps): JSX.Element => {
  const { style, ...restProps } = props;

  return <BaseText style={[styles.text, style]} {...restProps} />;
};
