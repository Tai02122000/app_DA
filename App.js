import { NativeBaseProvider, StatusBar, View } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./src/Navigations/BottomNav";
import LoginScreen2 from "./src/Screens/LoginScreen2";
import RegisterScreen2 from "./src/Screens/RegisterScreen2";
import SimiliarProductScreen from "./src/Screens/SimiliarProductScreen";
import UpdateProfileScreen from "./src/Screens/UpdateProfileScreen";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import store from "./src/Redux/Store";
import CreateBlogScreen from "./src/Screens/CreateBlogScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar hidden={true} />

          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={LoginScreen2} />
            <Stack.Screen name="Register" component={RegisterScreen2} />
            <Stack.Screen name="Bottom" component={BottomNav} />
            <Stack.Screen
              name="SimiliarProduct"
              component={SimiliarProductScreen}
            />
            <Stack.Screen
              name="UpdateProfile"
              component={UpdateProfileScreen}
            />
            <Stack.Screen name="CreateBlog" component={CreateBlogScreen} />
            <Stack.Screen name="Profile1" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
