import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  SectionList,
  FlatList,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import style from './style';
import NewsItem from '../../components/NewsItem/NewsItem';
import {categoriesContent} from '../../globals/constants/data';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.flatListRef = null;
    this.refsMap = new Map();
    this.indexesMap = new Map();
    this.index = 1;
  }

  render() {
    this.flatListRef = null;
    return (
      <SafeAreaView style={style.containerStyle}>
        <Text>Categories</Text>
        <SectionList
          sections={categoriesContent}
          horizontal={false}
          keyExtractor={(item, index) => item.title + index}
          renderItem={({item, index}) => null}
          renderSectionHeader={({section}) => (
            <TouchableWithoutFeedback
              onPress={() => {
                this.props.navigation.navigate('Category', {
                  categoryName: section.title,
                });
              }}>
              <View style={{flex: 1}}>
                <Text style={{color: '#ff0000', fontSize: 17}}>
                  {section.title}
                </Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      this.refsMap[section.title].scrollToIndex({
                        index: this.indexesMap[section.title],
                      });
                      this.indexesMap[section.title] =
                        this.indexesMap[section.title] - 1;
                    }}>
                    <Text style={{color: '#ff0000', fontSize: 17}}>
                      {' '}
                      minus{' '}
                    </Text>
                  </TouchableWithoutFeedback>

                  <FlatList
                    horizontal={true}
                    data={section.data}
                    ref={(ref) => {
                      this.refsMap[section.title] = ref;
                      this.indexesMap[section.title] = 0;
                    }}
                    renderItem={({item, index}) => (
                      <NewsItem
                        title={item.title}
                        img={item.img}
                        key={index}
                        description={item.description}
                      />
                    )}
                  />

                  <TouchableWithoutFeedback
                    onPress={() => {
                      this.refsMap[section.title].scrollToIndex({
                        index: this.indexesMap[section.title],
                      });
                      this.indexesMap[section.title] =
                        this.indexesMap[section.title] + 1;
                    }}>
                    <Text style={{color: '#ff0000', fontSize: 17}}> plus </Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </SafeAreaView>
    );
  }
}

export default Categories;
