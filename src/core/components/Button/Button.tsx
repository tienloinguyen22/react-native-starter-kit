import React, { useContext } from 'react';
import { Button as BaseButton, ButtonProps, ThemeContext } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';
import { styles } from './ButtonStyles';

interface OwnProps {
  type?: 'primary' | 'secondary' | 'clear';
  disabled?: boolean;
}

type Props = OwnProps & Omit<ButtonProps, 'type'>;

export const Button = (props: Props): JSX.Element => {
  const { containerStyle, titleStyle, type, buttonStyle, ...restProps } = props;
  const { theme } = useContext(ThemeContext);

  if (!type || type === 'primary') {
    return (
      <BaseButton
        ViewComponent={LinearGradient}
        containerStyle={[styles.containerStyle, containerStyle]}
        buttonStyle={[buttonStyle]}
        titleStyle={[styles.titleStyle, styles.primaryTitleStyle, titleStyle]}
        linearGradientProps={{
          colors: [_.get(theme, 'colors.blue0'), _.get(theme, 'colors.blue10')],
          start: {
            x: 0,
            y: 0,
          },
          end: {
            x: 1,
            y: 1,
          },
        }}
        {...restProps}
      />
    );
  }

  if (type === 'clear') {
    return (
      <BaseButton
        containerStyle={[containerStyle]}
        buttonStyle={[buttonStyle]}
        titleStyle={[styles.titleStyle, styles.clearTitleStyle, titleStyle]}
        type='clear'
        {...restProps}
      />
    );
  }

  return (
    <BaseButton
      containerStyle={[styles.containerStyle, containerStyle]}
      buttonStyle={[styles.secondaryButtonStyle, buttonStyle]}
      titleStyle={[styles.titleStyle, styles.secondaryTitleStyle, titleStyle]}
      {...restProps}
    />
  );
};
