import { StyleSheet, Image, TouchableOpacity } from "react-native";

const ItemSocialLogin = (props: any) => {

    const { item, onSelect } = props;

    const handlePressed = () => {
        onSelect(item);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePressed}>
            <Image
                style={styles.logo}
                source={
                    item.icon
                }
            />
        </TouchableOpacity>
    );
};

export default ItemSocialLogin;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 15,
    },
    logo: {
        height: 35,
        width: 35
    }
})