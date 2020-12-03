import createStyles, {colors, dimensions} from '../../style/base';

export const categoryPreviewDimensions = {
  arrowIconStyle: 30,
};

export const categoryPreviewColors = {
  iconColor: colors.secondaryBackgroundColor,
  iconInactiveColor: colors.textColorLightInactive,
};

const categoryPreviewStyles = createStyles({
  containerStyle: {flex: 1, alignItems: 'center'},
  titleBarContainerStyle: {
    flexDirection: 'row',
    width: dimensions.fullWidth,
    backgroundColor: colors.textColorLight,
    borderBottomColor: colors.textColorLightInactive,
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  titleTextStyle: {
    color: colors.secondaryBackgroundColor,
    fontSize: 19,
    padding: dimensions.paddingS,
    paddingLeft: dimensions.paddingM,
    flex: 1,
  },
  contentRowContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: dimensions.paddingS,
    marginTop: dimensions.paddingXS,
  },
  arrowIconStyle: {
    padding: dimensions.paddingS,
  },
});

export default categoryPreviewStyles;
