import LoginScreen from '../features/login/LoginScreen';
import HomeScreen from '../features/home/HomeScreen';
import SettingScreen from '../features/setting/SettingScreen';
import PushNotificationScreen from '../features/firebase/PushNotification/PushNotificationScreen';

export const SCREENS = {
    LOGIN: {
        name: 'LoginScreen',
        component: LoginScreen
    },
    HOME: {
        name: 'HomeScreen',
        component: HomeScreen
    },
    SETTING: {
        name: 'SettingScreen',
        component: SettingScreen
    },
    PUSH_NOTIFICATION: {
        name: 'PushNotification',
        component: PushNotificationScreen
    }
};