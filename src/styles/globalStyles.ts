import { StyleSheet } from 'react-native';
import { getColors } from './colors';

export const globalStyles = StyleSheet.create({
  button: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 18,
  },
  separator: {
    height: 2,
    backgroundColor: getColors(false).separator,
    marginHorizontal: 20,
  },
  textSmall: {
    fontSize: 16,
  },
  textMedium: {
    fontSize: 18,
  },
  textLarge: {
    fontSize: 24,
  },
  textExtraLarge: {
    fontSize: 30,
  },
  textMediumBold: {
    fontWeight: '500',
  },
  textSemiBold: {
    fontWeight: '600',
  },
  textBold: {
    fontWeight: '700',
  },
  textExtraBold: {
    fontWeight: '900',
  },
});
