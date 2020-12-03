import React from 'react';
import {View, FlatList} from 'react-native';
import style from './style';
import NewsItem from '../NewsItem/NewsItem';

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

export default ColumnsNewsList;
