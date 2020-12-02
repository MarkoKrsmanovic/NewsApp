import React, {Component} from 'react';
import {View} from 'react-native';
import style from './style';
import {categoriesContent} from '../../globals/constants/data';
import ColumnsNewsList from '../../components/ColumsNewsList/ColumnsNewsList';

class Category extends Component {
  constructor(props) {
    super(props);
    this.category = null;
  }
  openArticle = (index) => {
    const {img, title, description} = this.category.data[index];
    this.props.navigation.navigate('Article', {
      imageUri: img,
      title: title,
      description: description,
    });
  };
  render() {
    this.category =
      categoriesContent[
        categoriesContent.findIndex(
          (category) => category.title === this.props.route.params.categoryName,
        )
      ];
    return (
      <View style={style.containerStyle}>
        <ColumnsNewsList
          listTitle={this.category.title}
          newsArray={this.category.data}
          onItemClick={this.openArticle}
        />
      </View>
    );
  }
}

export default Category;
