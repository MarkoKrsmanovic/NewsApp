import React, {Component} from 'react';
import {SafeAreaView, SectionList, Text} from 'react-native';
import style from './style';
import {connect} from 'react-redux';
import * as categoriesActions from '../../state/Categories/actions';
import CategoryPreview from '../CategoryPreview/CategoryPreview';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.index = 1;
    this.fetchAllCategories();
  }

  fetchAllCategories = () => {
    this.props.getCategory('entertainment');
    this.props.getCategory('general');
    this.props.getCategory('health');
    this.props.getCategory('science');
    this.props.getCategory('sport');
    this.props.getCategory('technology');
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (prevProps.languageName !== this.props.languageName) {
      this.fetchAllCategories();
    }
  };

  openCategory = (categoryName) => {
    this.props.navigation.navigate('Category', {
      categoryName: categoryName,
    });
  };

  openArticle = (categoryName, itemIndex) => {
    const {urlToImage, title, content} = this.props[
      categoryName.toLowerCase()
    ].data[itemIndex];
    this.props.navigation.navigate('Article', {
      imageUri: urlToImage,
      title: title,
      content: content,
    });
  };

  render() {
    this.flatListRef = null;
    let sections = [
      this.props.entertainment,
      this.props.general,
      this.props.health,
      this.props.science,
      this.props.sport,
      this.props.technology,
    ];
    return (
      <SafeAreaView style={style.containerStyle}>
        <Text>Top 5 news by categories from {this.props.languageName}</Text>
        <SectionList
          sections={sections}
          horizontal={false}
          keyExtractor={(item, index) => item.title + index}
          renderItem={({item, index}) => null}
          renderSectionHeader={({section}) => (
            <CategoryPreview
              section={section}
              openCategory={this.openCategory}
              openArticle={this.openArticle}
            />
          )}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    entertainment: state.categories.entertainment,
    general: state.categories.general,
    health: state.categories.health,
    science: state.categories.science,
    sport: state.categories.sport,
    technology: state.categories.technology,
    languageName: state.newsLanguage.languageName,
  };
};

const mapDispatchToProps = {
  ...categoriesActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
