import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = () => {

    return (
        <TouchableOpacity style={styles.container}>
            <Text>Hello Home Screen</Text>
        </TouchableOpacity>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});