import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{justifyContent: 'center', flex: 1, backgroundColor: '#ff00f0'}}>
        <Text>hi</Text>
      </View>
    );
  }
}

export default Home;
