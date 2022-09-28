import { View, Text, StyleSheet } from "react-native";
import SelectSocialLogin from "./SelectSocialLogin";

const FooterSocialLogin = () => {
    return (
        <View style={styles.container}>
            <Text>Login via social media</Text>
            <SelectSocialLogin />
        </View>
    );
};

export default FooterSocialLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
})