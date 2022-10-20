import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { DATA_HOME_FUNCTION } from 'src/utils';
import { FormatDataWithColumns } from 'src/utils/CommonUtils';
import ItemHomeScreen from './ItemHomeScreen';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '@navigations';

const HomeScreen = () => {

    const navigation = useNavigation();

    const onSelectedItem = (item: any) => {
        switch(item.code){
            case 'fb_push_noti':
                return navigation.navigate(SCREENS.PUSH_NOTIFICATION.name);
            default :
                return null
        }
    }

    const renderItem = (item: any) => {
        return (
           <ItemHomeScreen item={item.item} onSelectItem={onSelectedItem}/>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList 
                contentContainerStyle={{paddingHorizontal: 4}}
                numColumns={2}
                horizontal={false}
                keyExtractor={(index)=>index.toString()}
                data={FormatDataWithColumns(DATA_HOME_FUNCTION, 2)}
                renderItem={renderItem}
            />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    } 
});