import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text>Hello Setting Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});