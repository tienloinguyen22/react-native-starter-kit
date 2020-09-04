import { StyleSheet } from 'react-native';
import { theme } from '../../../../core/theme';

export const styles = StyleSheet.create({
  flexOne: { flex: 1 },
  flatList: {
    flex: 1,
    flexDirection: 'row',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 112,
    left: 16,
    right: 16,
    justifyContent: 'center',
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4,
    backgroundColor: theme.colors.white,
  },
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  slideTitle: {
    fontSize: 36,
    fontWeight: '900',
    lineHeight: 48,
    textAlign: 'center',
    color: theme.colors.white,
  },
  slideDescription: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: theme.colors.white,
  },
  slideInfo: {
    position: 'absolute',
    bottom: 150,
    left: 16,
    right: 16,
    justifyContent: 'center',
  },
});
