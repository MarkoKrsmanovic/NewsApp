import createStyles, {dimensions, colors} from '../../style/base';

const newsItemStyles = createStyles({
  containerStyle: {
    flex: 1,
    height: 200,
    width: dimensions.fullWidth / 2,
    margin: dimensions.paddingS,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: colors.secondaryBackgroundColor,
    borderRadius: 5,
  },
});

export default newsItemStyles;
