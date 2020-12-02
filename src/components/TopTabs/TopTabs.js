import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import style, {topTabsDimensions, topTabsColors} from './style';
import {Icon} from 'react-native-elements';

const TopTabs = ({tabs, selectedTabIndex, onTabClicked}) => {
  const renderAll = () => {
    let tabWidth = (topTabsDimensions.screenWidth / tabs.length) * 0.95;
    return tabs.map((tab) => {
      const selected = tab.index === selectedTabIndex;
      const lineColor = selected
        ? topTabsColors.tabSelectorActiveColor
        : topTabsColors.tabSelectorInactiveColor;
      const contentColor = selected
        ? topTabsColors.contentActiveColor
        : topTabsColors.contentInactiveColor;
      return (
        <View style={style.tabContainerStyle} key={tab.index}>
          <TouchableWithoutFeedback
            onPress={() => onTabClicked(tab.index)}
            disabled={selected}>
            <View>
              <View style={style.infoContainerStyle}>
                <Icon name={tab.icon} size={18} color={contentColor} />
                <Text style={{...style.tabNameTextStyle, color: contentColor}}>
                  {tab.name}
                </Text>
              </View>
              <View
                style={{
                  ...style.selectorStyle,
                  backgroundColor: lineColor,
                  width: tabWidth,
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      );
    });
  };

  return <View style={style.containerStyle}>{renderAll()}</View>;
};

export default TopTabs;
