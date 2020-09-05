import { StyleSheet } from 'react-native';
import { theme } from '../../../../core/theme';

export const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  contentContainer: { padding: 16 },
  logoContainer: {
    marginTop: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginHorizontal: '4%',
    marginTop: 50,
  },
  title: {
    color: theme.colors.white,
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 48,
    textAlign: 'center',
  },
  buttonsContainer: { marginTop: 24 },
  loginButtonContainer: { marginBottom: 24 },
  note: {
    color: theme.colors.white,
    fontSize: 12,
  },
});
