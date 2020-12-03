import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import {connect} from 'react-redux';
import ColumnsNewsList from '../../components/ColumsNewsList/ColumnsNewsList';
import * as categoryActions from '../../state/Category/actions';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import PropTypes from 'prop-types';

class Category extends Component {
  constructor(props) {
    super(props);
    this.categoryName = this.props.route.params.categoryName;
    this.fetchCategory();
  }
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (prevProps.languageLongName !== this.props.languageLongName) {
      this.fetchCategory();
    }
  };
  fetchCategory = () => {
    this.props.getCategory(this.categoryName.toLowerCase());
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
        <Text style={style.headerTextStyle}>
          Top {this.categoryName} news from {this.props.languageLongName}
        </Text>
        {this.props.done ? (
          <ColumnsNewsList
            listTitle={this.props.route.params.categoryName}
            newsArray={this.props.categoryArticles}
            onItemClick={this.openArticle}
          />
        ) : (
          <LoadingScreen
            error={this.props.error}
            loading={this.props.loading}
            retry={this.props.error ? this.fetchCategory : null}
            retryText={''}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categoryArticles: state.category.articles,
    loading: state.category.loading,
    error: state.category.error,
    done: state.category.done,
    languageLongName: state.newsLanguage.languageLongName,
  };
};

const mapDispatchToProps = {
  ...categoryActions,
};

Category.propTypes = {
  categoryArticles: PropTypes.array,
  loading: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({message: PropTypes.string}),
  ]),
  done: PropTypes.bool,
  languageLongName: PropTypes.string,
  getCategory: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
