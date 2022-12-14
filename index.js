import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.warn('kmh', 'Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
