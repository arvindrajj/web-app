/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Routes from '../navigation/routes/routes';
// import { Colors } from '../colors'

import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.title}>
      <Routes />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  title: {
    height: 'auto', 
    backgroundColor: 'rgb(33, 34, 43)', 
    top: 0,
  },
});
