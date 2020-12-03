import React, {Component} from 'react';
import {View, FlatList, TouchableWithoutFeedback, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import NewsItem from '../../components/NewsItem/NewsItem';
import style, {categoryPreviewColors, categoryPreviewDimensions} from './style';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import PropTypes from 'prop-types';

class CategoryPreview extends Component {
  constructor(props) {
    super(props);
    this.flatListRef = null;
    this.state = {
      scrollIndex: 0,
      show: true,
    };
  }

  moveSelectionRight = () => {
    if (this.state.scrollIndex < this.props.section.data.length - 1) {
      this.setState(
        (prevState, props) => {
          return {scrollIndex: prevState.scrollIndex + 1};
        },
        () => {
          this.flatListRef.scrollToIndex({index: this.state.scrollIndex});
        },
      );
    }
  };

  moveSelectionLeft = (categoryName) => {
    if (this.state.scrollIndex > 0) {
      this.setState(
        (prevState, props) => {
          return {scrollIndex: prevState.scrollIndex - 1};
        },
        () => {
          this.flatListRef.scrollToIndex({index: this.state.scrollIndex});
        },
      );
    }
  };

  toggleShowHide = () => {
    this.setState((prevState, props) => {
      return {show: !prevState.show, scrollIndex: 0};
    });
  };

  openArticle = (index) => {
    this.props.openArticle(this.props.section.title, index);
  };

  retryFetching = () => {
    this.props.retryMethod(this.props.section.title.toLowerCase());
  };

  renderCategoryList = () => {
    return this.props.section.done ? (
      <View style={style.contentRowContainerStyle}>
        <TouchableWithoutFeedback
          disabled={this.state.scrollIndex === 0}
          onPress={() => this.moveSelectionLeft(this.props.section.title)}>
          <Icon
            name="keyboard-arrow-left"
            size={categoryPreviewDimensions.arrowIconStyle}
            color={
              this.state.scrollIndex > 0
                ? categoryPreviewColors.iconColor
                : categoryPreviewColors.iconInactiveColor
            }
            style={style.arrowIconStyle}
          />
        </TouchableWithoutFeedback>

        <FlatList
          horizontal={true}
          data={this.props.section.data}
          ref={(ref) => (this.flatListRef = ref)}
          renderItem={({item, index}) => (
            <NewsItem
              index={index}
              onItemClick={this.openArticle}
              title={item.title}
              imageUri={item.urlToImage}
              description={item.description}
            />
          )}
        />

        <TouchableWithoutFeedback
          disabled={
            this.state.scrollIndex === this.props.section.data.length - 1
          }
          onPress={() => this.moveSelectionRight(this.props.section.title)}>
          <Icon
            name="keyboard-arrow-right"
            size={categoryPreviewDimensions.arrowIconStyle}
            color={
              this.state.scrollIndex < this.props.section.data.length - 1
                ? categoryPreviewColors.iconColor
                : categoryPreviewColors.iconInactiveColor
            }
            style={style.arrowIconStyle}
          />
        </TouchableWithoutFeedback>
      </View>
    ) : (
      <View style={style.contentRowContainerStyle}>
        <LoadingScreen
          error={this.props.section.error}
          loading={this.props.section.loading}
          retry={this.props.section.error ? this.retryFetching : null}
          retryText={''}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={style.containerStyle}>
        <View style={style.titleBarContainerStyle}>
          <TouchableWithoutFeedback
            onPress={() => this.props.openCategory(this.props.section.title)}>
            <Text style={style.titleTextStyle}>{this.props.section.title}</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.toggleShowHide()}>
            <Icon
              name={this.state.show ? 'arrow-drop-up' : 'arrow-drop-down'}
              size={categoryPreviewDimensions.arrowIconStyle}
              color={categoryPreviewColors.iconColor}
              style={style.arrowIconStyle}
            />
          </TouchableWithoutFeedback>
        </View>
        {this.state.show ? this.renderCategoryList() : null}
      </View>
    );
  }
}

CategoryPreview.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string,
    data: PropTypes.array,
    loading: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({message: PropTypes.string}),
    ]),
    done: PropTypes.bool,
  }),
  openCategory: PropTypes.func,
  openArticle: PropTypes.func,
};

export default CategoryPreview;
