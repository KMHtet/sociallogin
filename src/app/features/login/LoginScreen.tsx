import {View, Text, StyleSheet} from 'react-native';
// import { FooterSocialLogin } from '@components';
import FooterSocialLogin from '../../components/FooterSocialLogin/FooterSocialLogin';

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