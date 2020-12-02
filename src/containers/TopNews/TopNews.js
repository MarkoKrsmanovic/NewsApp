import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import ColumnsNewsList from '../../components/ColumsNewsList/ColumnsNewsList';
import * as topNewsActions from '../../state/TopNews/actions';

const newsData = [
  {
    title: 'Title1',
    img: 'https://www.computerhope.com/jargon/r/random-dice.jpg',
    description: 'description1',
  },
  {
    title: 'Title2',
    img: 'https://www.computerhope.com/jargon/r/random-dice.jpg',
    description: 'description2',
  },
  {
    title: 'Title3',
    img: 'https://www.computerhope.com/jargon/r/random-dice.jpg',
    description: 'description3',
  },
  {
    title: 'Title4',
    img: 'https://www.computerhope.com/jargon/r/random-dice.jpg',
    description: 'description4',
  },
  {
    title: 'Title5',
    img: 'https://www.computerhope.com/jargon/r/random-dice.jpg',
    description: 'description5',
  },
];

class TopNews extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.props.getTopNews();
  }

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
  };
};

const mapDispatchToProps = {
  ...topNewsActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNews);
