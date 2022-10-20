import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import FooterSocialLogin from '../../components/FooterSocialLogin/FooterSocialLogin';
import { SCREENS } from '../../navigations';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';
import colors from 'src/themes/colors';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {

        GoogleSignin.configure({
            webClientId: '736356537439-4ru3vt14p826ff5r7m8a9gneceol1lmb.apps.googleusercontent.com',
        });

    }, []);

    const signIn = async () => {
        try {
            const hasPlayservice = await GoogleSignin.hasPlayServices();
            console.warn("kmh", "have play service", hasPlayservice);

            const isSignedIn = await GoogleSignin.isSignedIn();
            console.warn("kmh", "Is sign in", isSignedIn);

            const {idToken, user} = await GoogleSignin.signIn();
            console.warn("kmh", "userInfo", user);

        } catch (err) {
            console.warn("kmh", "on error", err?.code, err);
        }
    }

    const onRouteToHome = () => {
        navigation.navigate(SCREENS.HOME.name);
    }

    return (
        <View style={styles.container}>
            <View style={styles.googleLoginContainer}>
                <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={signIn}
                />
                <TouchableOpacity onPress={onRouteToHome} style={styles.homeBtnContainer}>
                    <Text>Go to HomeScreen</Text>
                </TouchableOpacity>
            </View>
            <FooterSocialLogin />
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    googleLoginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    homeBtnContainer: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        borderWidth: 1,
        borderColor: colors.color0599f5
    }
});