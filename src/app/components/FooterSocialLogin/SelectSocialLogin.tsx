import { View, Text, StyleSheet } from "react-native";
import ItemSocialLogin from "./ItemSocialLogin";
import { DATA_SOCIAL_LOGIN } from "../../../utils";


const SelectSocialLogin = () => {

    const handleSelected = (dataSelected: any) => {
        
    };

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