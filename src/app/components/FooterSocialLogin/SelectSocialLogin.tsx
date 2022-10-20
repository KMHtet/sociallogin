import { View, StyleSheet } from "react-native";
import ItemSocialLogin from "./ItemSocialLogin";
import { DATA_SOCIAL_LOGIN } from "../../../utils";
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from "@navigations";

const SelectSocialLogin = () => {

    const navigation = useNavigation();

    const handleSelected = (dataSelected: any) => {
        switch (dataSelected.code) {
            case 'google':
                return loginWithGoogle();
            case 'fb':
                return loginWithFacebook();
            case 'li':
                return loginWithLinkedin();
            case 'ig':
                return loginWithInstagram();
            default:
                return loginWithGoogle();
        }
    };

    const loginWithGoogle = () => {
        navigation.navigate(SCREENS.SETTING.name);
    }

    const loginWithLinkedin = () => {

    }

    const loginWithInstagram = () => {
        
    }

    const loginWithFacebook = () => {
        
    }

    return (
        <View style={styles.container}>
            {DATA_SOCIAL_LOGIN.map((item, index) => {
                return (
                    <ItemSocialLogin
                        key={index}
                        item={item}
                        onSelect={handleSelected}
                    />
                )
            })}
        </View>
    );
};

export default SelectSocialLogin;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
})