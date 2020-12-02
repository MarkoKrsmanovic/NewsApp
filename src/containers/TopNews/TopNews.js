import React, {Component} from 'react';
import {View} from 'react-native';
import ColumnsNewsList from '../../components/ColumsNewsList/ColumnsNewsList';

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
  }

  openArticle = (index) => {
    const {img, title, description} = newsData[index];
    this.props.navigation.navigate('Article', {
      imageUri: img,
      title: title,
      description: description,
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ColumnsNewsList
          listTitle="Top News"
          newsArray={newsData}
          onItemClick={this.openArticle}
        />
      </View>
    );
  }
}

export default TopNews;
