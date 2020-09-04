import { StyleSheet } from 'react-native';

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
    backgroundColor: '#ffffff',
  },
  leftButtonContainer: {
    position: 'absolute',
    left: 0,
  },
  rightButtonContainer: {
    position: 'absolute',
    right: 0,
  },
  bottomButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transparentBottomButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    padding: 12,
  },
  introSlide: { flex: 1 },
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  img: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  slideTitle: {
    fontSize: 36,
    fontWeight: '900',
    lineHeight: 48,
    textAlign: 'center',
    color: '#ffffff',
  },
  slideDescription: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#ffffff',
  },
  slideInfo: {
    position: 'absolute',
    bottom: 150,
    left: 16,
    right: 16,
    justifyContent: 'center',
  },
});
