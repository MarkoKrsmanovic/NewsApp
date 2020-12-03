import createStyles, {dimensions, colors} from '../../style/base';

const newsItemStyles = createStyles({
  containerStyle: {
    flex: 1,
    width: dimensions.fullWidth / 2,
    margin: dimensions.paddingXS,
    marginBottom: 0,
    borderWidth: 1,
    borderRadius: 5,
  },
  descriptionTextStyle: {
    color: colors.textColor,
    paddingBottom: dimensions.paddingXS,
  },
});

export default newsItemStyles;
