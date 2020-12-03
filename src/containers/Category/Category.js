import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import {connect} from 'react-redux';
import ColumnsNewsList from '../../components/ColumsNewsList/ColumnsNewsList';
import * as categoryActions from '../../state/Category/actions';

class Category extends Component {
  constructor(props) {
    super(props);
    this.categoryName = this.props.route.params.categoryName;
    this.props.getCategory(this.categoryName.toLowerCase());
  }
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (prevProps.languageLongName !== this.props.languageLongName) {
      this.props.getCategory(this.categoryName.toLowerCase());
    }
  };
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
        <Text>
          Top {this.categoryName} news from {this.props.languageLongName}
        </Text>
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
    languageLongName: state.newsLanguage.languageLongName,
  };
};

const mapDispatchToProps = {
  ...categoryActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
