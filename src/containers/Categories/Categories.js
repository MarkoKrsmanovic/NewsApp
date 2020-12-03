import React, {Component} from 'react';
import {SafeAreaView, SectionList} from 'react-native';
import style from './style';
import {connect} from 'react-redux';
import * as categoriesActions from '../../state/Categories/actions';
import CategoryPreview from '../CategeryPreview/CategoryPreview';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.index = 1;

    this.props.getCategory('entertainment');
    this.props.getCategory('general');
    this.props.getCategory('health');
    this.props.getCategory('science');
    this.props.getCategory('sport');
    this.props.getCategory('technology');
  }

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
  };
};

const mapDispatchToProps = {
  ...categoriesActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
