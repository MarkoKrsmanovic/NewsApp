import createStyle, {colors, dimensions} from '../../style/base';

export const loadingScreenColors = {
  loaderColor: colors.primaryDarkColor,
  darkTextColor: colors.secondaryBackgroundColor,
};

const loadingScreenStyles = createStyle({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorTextStyle: {color: colors.errorTextColor, textAlign: 'center'},
  errorContainerStyle: {alignItems: 'center', justifyContent: 'center'},
  generalErrorTextStyle: {
    textAlign: 'center',
    color: colors.secondaryBackgroundColor,
  },
  errorTextStyleLight: {textAlign: 'center', color: colors.textColorLight},
  retryDescriptionTextStyle: {
    textAlign: 'center',
    color: colors.textColor,
  },
  reloadTextStyle: {color: colors.textColor, fontSize: 17},
  retryContainerStyle: {alignItems: 'center', justifyContent: 'center'},
  retryHolderStyle: {
    width: dimensions.fullWidth,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default loadingScreenStyles;
