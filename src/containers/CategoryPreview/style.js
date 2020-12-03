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
  titleTextStyle: {
    color: colors.secondaryBackgroundColor,
    fontSize: 19,
    padding: 8,
  },
  contentRowContainerStyle: {
    height: 200,
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIconStyle: {
    padding: dimensions.paddingS,
  },
});

export default categoryPreviewStyles;
