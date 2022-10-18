import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { Alert, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance, AndroidStyle, AndroidVisibility } from '@notifee/react-native';

export const onMessageReceived = async (
    message: FirebaseMessagingTypes.RemoteMessage
) => {
    if (Platform.OS === 'android') {

    }
};

export const getDeviceToken = async () => {
    const fcmToken = await messaging().getToken();
    console.warn('kmh', 'FCM Token', fcmToken);
    return fcmToken;
}

export const notificationListener = () => {

    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
    });

    // Check whether an initial notification is available
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
            }
        });

    // Foreground state messages
    messaging().onMessage(async remoteMessage => {
        console.warn('kmh', 'Message handled in the foreground!', remoteMessage);

        if(Platform.OS === 'android'){
            await notifee.createChannel({
                id: 'default',
                name: 'Default',
                lights: false,
                vibration: true,
                importance: AndroidImportance.HIGH,
                badge: true,
                visibility: AndroidVisibility.PRIVATE,
              });
        }
        await notifee.displayNotification({
            title: remoteMessage.notification?.title,
            body: remoteMessage.notification?.body,
            android: {
              channelId: 'default',
              visibility: AndroidVisibility.PRIVATE,
              largeIcon: remoteMessage.notification?.android?.imageUrl,
              style: remoteMessage.notification?.android?.imageUrl
                ? {
                    type: AndroidStyle.BIGPICTURE,
                    picture: remoteMessage.notification?.android?.imageUrl,
                    largeIcon: null,
                  }
                : undefined,
            },
            ios: {
              categoryId: 'default',
              foregroundPresentationOptions: {
                alert: true,
                badge: true,
                sound: true,
              },
              critical: true,
            },
            data: remoteMessage.data,
          });
    })
}