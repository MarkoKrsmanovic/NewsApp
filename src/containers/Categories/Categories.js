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
import {connect} from 'react-redux';
import NewsItem from '../../components/NewsItem/NewsItem';
import * as categoriesActions from '../../state/Categories/actions';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.flatListRef = null;
    this.refsMap = new Map();
    this.indexesMap = new Map();
    this.index = 1;

    this.props.getCategory('entertainment');
    this.props.getCategory('general');
    this.props.getCategory('health');
    this.props.getCategory('science');
    this.props.getCategory('sports');
    this.props.getCategory('technology');
  }

  render() {
    this.flatListRef = null;
    let sections = [
      this.props.entertainment,
      this.props.general,
      this.props.health,
      this.props.science,
      this.props.sport,
      this.props.technology,
    ];
    return (
      <SafeAreaView style={style.containerStyle}>
        <Text>Categories</Text>
        <SectionList
          sections={sections}
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
                        imageUri={item.urlToImage}
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

const mapStateToProps = (state) => {
  return {
    entertainment: state.categories.entertainment,
    general: state.categories.general,
    health: state.categories.health,
    science: state.categories.science,
    sport: state.categories.sport,
    technology: state.categories.technology,
  };
};

const mapDispatchToProps = {
  ...categoriesActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
