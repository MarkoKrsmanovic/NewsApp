import React, {Component} from 'react';
import {View} from 'react-native';
import style from './style';
import {connect} from 'react-redux';
import ColumnsNewsList from '../../components/ColumsNewsList/ColumnsNewsList';
import * as categoryActions from '../../state/Category/actions';

class Category extends Component {
  constructor(props) {
    super(props);
    let categoryName = this.props.route.params.categoryName;
    this.props.getCategory(categoryName.toLowerCase());
    this.category = null;
  }
  openArticle = (index) => {
    const {urlToImage, title, content} = this.props.categoryArticles[index];
    this.props.navigation.navigate('Article', {
      imageUri: urlToImage,
      title: title,
      content: content,
    });
  };
  render() {
    return (
      <View style={style.containerStyle}>
        <ColumnsNewsList
          listTitle={this.props.route.params.categoryName}
          newsArray={this.props.categoryArticles}
          onItemClick={this.openArticle}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categoryArticles: state.category.articles,
  };
};

const mapDispatchToProps = {
  ...categoryActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
