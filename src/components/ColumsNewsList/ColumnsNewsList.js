import React from 'react';
import {View, FlatList} from 'react-native';
import style from './style';
import NewsItem from '../NewsItem/NewsItem';
import PropTypes from 'prop-types';

const ColumnsNewsList = ({newsArray, onItemClick}) => {
  return (
    <View style={style.containerStyle}>
      <FlatList
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'flex-start'}}
        data={newsArray}
        keyExtractor={(item, index) => item.publishedAt + index}
        renderItem={({item, index}) => (
          <NewsItem
            index={index}
            title={item.title}
            imageUri={item.urlToImage}
            onItemClick={onItemClick}
            description={item.description}
          />
        )}
      />
    </View>
  );
};

ColumnsNewsList.propTypes = {
  newsArray: PropTypes.arrayOf(
    PropTypes.shape({
      publishedAt: PropTypes.string,
      title: PropTypes.string,
      urlToImage: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
  onItemClick: PropTypes.func,
};

export default ColumnsNewsList;
