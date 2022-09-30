import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FooterSocialLogin from '../../components/FooterSocialLogin/FooterSocialLogin';
import { SCREENS } from '../../navigations';

const LoginScreen = () => {

    return (
        <View style={styles.container}>
            <FooterSocialLogin />
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});