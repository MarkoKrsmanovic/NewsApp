import React from 'react';
import {View, Image, Text} from 'react-native';
import style from './style';

const Article = ({route, navigation}) => {
  const {imageUri, title, description} = route.params;
  return (
    <View style={style.containerStyle}>
      <View style={style.articleHeaderContainerStyle}>
        <Image source={{uri: imageUri}} style={style.articleImageStyle} />
        <View style={style.articleTitleContainerStyle}>
          <Text style={style.articleTitleTextStyle}>{title}</Text>
        </View>
      </View>
      <View style={style.descriptionContainerStyle}>
        <Text style={style.descriptionTextStyle}>{description}</Text>
      </View>
    </View>
  );
};

export default Article;
