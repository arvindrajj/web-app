/* eslint-disable no-undef */
/**
 * @format
 */
import { AppRegistry } from 'react-native';
import { default as App } from './app/app';

AppRegistry.registerComponent('app', () => App);
AppRegistry.runApplication('app', {
  rootTag: document.getElementById('root'),
});