import createStyle, {dimensions, colors} from '../../style/base';

export const topTabsDimensions = {
  screenWidth: dimensions.fullWidth,
};

export const topTabsColors = {
  tabSelectorActiveColor: colors.accentColor,
  tabSelectorInactiveColor: colors.primaryColor,
  contentActiveColor: colors.textColor,
  contentInactiveColor: colors.textColorLightInactive,
};

const topTabsStyles = createStyle({
  containerStyle: {
    width: dimensions.fullWidth,
    height: 50,
    flexDirection: 'row',
  },
  tabContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.primaryColor,
  },
  infoContainerStyle: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectorStyle: {
    height: 2,
    marginBottom: dimensions.paddingXS,
  },
  tabNameTextStyle: {
    fontSize: 17,
    paddingLeft: dimensions.paddingS,
  },
});

export default topTabsStyles;
