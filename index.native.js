/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/app/app';
import name from './src/app.json';
const {appName} = name;

AppRegistry.registerComponent(appName, () => App);
