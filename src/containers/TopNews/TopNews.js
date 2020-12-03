import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import ColumnsNewsList from '../../components/ColumsNewsList/ColumnsNewsList';
import * as topNewsActions from '../../state/TopNews/actions';

class TopNews extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.props.getTopNews();
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (prevProps.languageLongName !== this.props.languageLongName) {
      this.props.getTopNews();
    }
  };

  openArticle = (index) => {
    const {urlToImage, title, content} = this.props.topNewsArticles[index];
    this.props.navigation.navigate('Article', {
      imageUri: urlToImage,
      title: title,
      content: content,
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Top news from {this.props.languageLongName}</Text>
        <ColumnsNewsList
          listTitle="Top News"
          newsArray={this.props.topNewsArticles}
          onItemClick={this.openArticle}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topNewsArticles: state.topNews.articles,
    languageLongName: state.newsLanguage.languageLongName,
  };
};

const mapDispatchToProps = {
  ...topNewsActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNews);
