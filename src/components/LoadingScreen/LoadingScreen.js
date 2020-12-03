import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import style, {loadingScreenColors} from './style';

const LoadingScreen = ({loading, error, retry, retryText}) => {
  const renderRetryView = () => {
    return (
      <View style={style.retryContainerStyle}>
        {retryText !== '' ? (
          <Text style={style.retryDescriptionTextStyle}>{retryText}</Text>
        ) : null}
        <View style={style.retryHolderStyle}>
          {retry ? (
            <Text style={style.reloadTextStyle} onPress={() => retry()}>
              Reload
            </Text>
          ) : null}
        </View>
      </View>
    );
  };

  return (
    <View style={style.containerStyle}>
      {loading ? (
        <View>
          <ActivityIndicator
            size="small"
            color={loadingScreenColors.loaderColor}
          />
          <Text style={{color: loadingScreenColors.darkTextColor}}>
            {loading}
          </Text>
        </View>
      ) : null}
      {error ? (
        <View style={style.errorContainerStyle}>
          <Text style={style.generalErrorTextStyle}>An error has occurred</Text>
          <Text style={style.errorTextStyle}>
            {error ? error.message : 'error'}
          </Text>
        </View>
      ) : null}
      {!loading ? renderRetryView() : null}
    </View>
  );
};

export default LoadingScreen;
