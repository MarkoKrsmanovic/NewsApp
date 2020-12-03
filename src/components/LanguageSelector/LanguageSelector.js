import React, {Component} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {connect} from 'react-redux';
import style from './style';
import * as newsLanguageActions from '../../state/NewsLanguage/actions';
import {languageOptions} from '../../globals/constants/consts';

class LanguageSelector extends Component {
  constructor(props) {
    super(props);
  }

  renderPickerItems = () => {
    return languageOptions.map((item) => {
      return (
        <Picker.Item
          label={item.name}
          value={item.value}
          key={item.value.toString()}
        />
      );
    });
  };

  valueChanged = (itemIndex) => {
    this.props.changeNewsLanguage(
      languageOptions[itemIndex].value,
      languageOptions[itemIndex].name,
      languageOptions[itemIndex].longName,
    );
  };

  render() {
    return (
      <View style={style.containerStyle}>
        <Picker
          selectedValue={this.props.newsLanguage.languageCode}
          style={style.pickerStyle}
          mode="dropdown"
          onValueChange={(itemValue, itemIndex) =>
            this.valueChanged(itemIndex)
          }>
          {this.renderPickerItems()}
        </Picker>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newsLanguage: state.newsLanguage,
  };
};

const mapDispatchToProps = {
  ...newsLanguageActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
