import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import style from './style';

const NewsItem = ({title, description, imageUri, onItemClick, index}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onItemClick(index)}>
      <View style={style.containerStyle}>
        <Text numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Text>
        <Image style={{flex: 1}} source={{uri: imageUri}} />
        <Text numberOfLines={2} ellipsizeMode="tail">
          {description}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewsItem;
