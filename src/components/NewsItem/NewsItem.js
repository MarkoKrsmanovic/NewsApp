import React from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';
import style from './style';
import {Card} from 'react-native-elements';
import PropTypes from 'prop-types';

const NewsItem = ({title, description, imageUri, onItemClick, index}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onItemClick(index)}>
      <Card containerStyle={style.containerStyle}>
        <Card.Title numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Card.Title>
        <Card.Divider />
        <Card.Image source={{uri: imageUri}} />
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={style.descriptionTextStyle}>
          {description}
        </Text>
      </Card>
    </TouchableWithoutFeedback>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUri: PropTypes.string,
  onItemClick: PropTypes.func,
  index: PropTypes.number,
};

export default NewsItem;
