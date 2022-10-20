import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from './ScreenRouters';

const nativeStack = createNativeStackNavigator();


export const RootNavigations = () => {
    return (
        <NavigationContainer>
            <nativeStack.Navigator
                initialRouteName={SCREENS.LOGIN.name}
                screenOptions={
                    { headerShown: false }
                }
            >
                <nativeStack.Screen
                    name={SCREENS.LOGIN.name}
                    component={SCREENS.LOGIN.component}
                />
                <nativeStack.Screen
                    name={SCREENS.HOME.name}
                    component={SCREENS.HOME.component}
                />
                <nativeStack.Screen
                    name={SCREENS.SETTING.name}
                    component={SCREENS.SETTING.component}
                />
                <nativeStack.Screen 
                    name={SCREENS.PUSH_NOTIFICATION.name}
                    component={SCREENS.PUSH_NOTIFICATION.component}
                />
            </nativeStack.Navigator>
        </NavigationContainer>
    );
};