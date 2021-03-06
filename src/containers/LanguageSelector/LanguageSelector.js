import React, {Component} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {connect} from 'react-redux';
import style from './style';
import * as newsLanguageActions from '../../state/NewsLanguage/actions';
import {languageOptions} from '../../globals/constants/consts';
import PropTypes from 'prop-types';

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
          selectedValue={this.props.languageCode}
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
    languageCode: state.newsLanguage.languageCode,
  };
};

const mapDispatchToProps = {
  ...newsLanguageActions,
};

LanguageSelector.propTypes = {
  languageCode: PropTypes.string,
  changeNewsLanguage: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
