import {StyleSheet, Dimensions} from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
  headerFontSize: 17,
  normalFontSize: 15,
  paddingXS: 4,
  paddingS: 8,
  paddingM: 16,
  paddingL: 32,
};

export const colors = {
  backgroundColor: '#eaeaea',
  secondaryBackgroundColor: '#d35d6e',
  primaryColor: '#08D9D6',
  primaryDarkColor: '#06a09e',
  accentColor: '#252a34',
  textColor: '#252a34',
  textColorLight: '#ffffff',
  textColorLightInactive: '#bbbbbb',
};

const baseStyles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundColor,
  },
};

export default function createStyles(overrides = {}) {
  return StyleSheet.create({...baseStyles, ...overrides});
}
