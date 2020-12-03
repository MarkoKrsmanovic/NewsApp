import React, {Component} from 'react';
import {View, FlatList, TouchableWithoutFeedback, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import NewsItem from '../../components/NewsItem/NewsItem';
import style, {categoryPreviewColors, categoryPreviewDimensions} from './style';

class CategoryPreview extends Component {
  constructor(props) {
    super(props);
    this.flatListRef = null;
    this.state = {
      scrollIndex: 0,
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

  openArticle = (index) => {
    this.props.openArticle(this.props.section.title, index);
  };

  render() {
    return (
      <View style={style.containerStyle}>
        <TouchableWithoutFeedback
          onPress={() => this.props.openCategory(this.props.section.title)}>
          <Text style={style.titleTextStyle}>{this.props.section.title}</Text>
        </TouchableWithoutFeedback>
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
      </View>
    );
  }
}

export default CategoryPreview;
