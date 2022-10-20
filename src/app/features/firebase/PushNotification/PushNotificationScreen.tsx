import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { requestNotificationPermission } from "src/utils/PermissionUtils";
import { getDeviceToken, notificationListener } from "src/utils/PushNotificationUtils";

const PushNotificationScreen = () => {

    useEffect(() => {
        requestNotificationPermission();
        getDeviceToken();
        notificationListener();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Push Notification</Text>
        </View>
    );
}

export default PushNotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

