import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 30,
    justifyContent: 'center',
  },
  titleStyle: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
  },
  secondaryButtonStyle: { backgroundColor: theme.colors.white },
  secondaryTitleStyle: { color: theme.colors.primary },
  primaryTitleStyle: { color: theme.colors.white },
  clearTitleStyle: {
    color: theme.colors.primary,
    fontWeight: '400',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
});
