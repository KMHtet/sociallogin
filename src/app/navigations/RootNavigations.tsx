import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from './ScreenRouters';

const Stack = createStackNavigator();

export const RootNavigations = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={
                    { headerShown: false }
                }
            >
                <Stack.Screen
                    name={SCREENS.LOGIN.name}
                    component={SCREENS.LOGIN.component}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};