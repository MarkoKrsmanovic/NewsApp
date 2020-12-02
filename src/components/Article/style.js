import createStyles, {dimensions, colors} from '../../style/base';

const articleStyles = createStyles({
  articleHeaderContainerStyle: {height: 280},
  articleImageStyle: {flex: 1},
  articleTitleContainerStyle: {
    width: dimensions.fullWidth,
    backgroundColor: colors.secondaryBackgroundColor,
    padding: dimensions.paddingS,
  },
  articleTitleTextStyle: {
    fontSize: dimensions.normalFontSize,
    color: '#ffffff',
    textAlign: 'center',
  },
  descriptionContainerStyle: {
    flex: 1,
    alignSelf: 'flex-start',
    padding: dimensions.paddingM,
  },
  descriptionTextStyle: {
    color: colors.textColor,
  },
});

export default articleStyles;
