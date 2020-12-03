import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import ColumnsNewsList from '../../components/ColumsNewsList/ColumnsNewsList';
import * as topNewsActions from '../../state/TopNews/actions';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';

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
        {this.props.done ? (
          <View style={{flex: 1}}>
            <ColumnsNewsList
              listTitle="Top News"
              newsArray={this.props.topNewsArticles}
              onItemClick={this.openArticle}
            />
          </View>
        ) : (
          <View style={{flex: 1}}>
            <LoadingScreen
              error={this.props.error}
              loading={this.props.loading}
              retry={this.props.error ? this.props.getTopNews : null}
              retryText={''}
            />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topNewsArticles: state.topNews.articles,
    loading: state.topNews.loading,
    error: state.topNews.error,
    done: state.topNews.done,
    languageLongName: state.newsLanguage.languageLongName,
  };
};

const mapDispatchToProps = {
  ...topNewsActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNews);
