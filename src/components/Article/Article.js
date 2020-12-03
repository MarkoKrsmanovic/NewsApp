import React from 'react';
import {View, Image, Text} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';

const Article = ({route, navigation}) => {
  const {imageUri, title, content} = route.params;
  return (
    <View style={style.containerStyle}>
      <View style={style.articleHeaderContainerStyle}>
        <Image source={{uri: imageUri}} style={style.articleImageStyle} />
        <View style={style.articleTitleContainerStyle}>
          <Text style={style.articleTitleTextStyle}>{title}</Text>
        </View>
      </View>
      <View style={style.descriptionContainerStyle}>
        <Text style={style.descriptionTextStyle}>{content}</Text>
      </View>
    </View>
  );
};

Article.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.exact({
      imageUri: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  }),
};

export default Article;
