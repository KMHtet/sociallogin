import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import colors from "src/themes/colors";

const ItemHomeScreen = (data: any) => {

    const {item, onSelectItem} = data;

    const onSelectedItem = () => {
        onSelectItem(item);
    }

    if(item.empty) return <View style={styles.emptyContainer}/>
    return(
        <TouchableOpacity onPress={onSelectedItem} style={styles.container}>
            <Text>
                {item.content} 
            </Text>
        </TouchableOpacity>
    );
}

export default ItemHomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        margin: 6,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.color0599f5,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyContainer: {
        flex: 1,
        margin: 6,
        paddingVertical: 10,
    }
})