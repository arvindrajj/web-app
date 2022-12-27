import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default (props) => {
  return <View style={styles.blur} />;
};

const styles = EStyleSheet.create({
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backdropFilter: 'saturate(180%) blur(12px)',
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
  },
});
