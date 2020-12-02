import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import style from './style';

const NewsItem = ({title, description, imageUri, onItemClick, index}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onItemClick(index)}>
      <View style={style.containerStyle}>
        <Text>{title}</Text>
        <Image style={{height: 100, width: 100}} source={{uri: imageUri}} />
        <Text>{description}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewsItem;
