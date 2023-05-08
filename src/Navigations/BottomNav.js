import React from "react";
import { Center } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../color";
import { StyleSheet } from "react-native";
import { FontAwesome, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import StackNav from "./StackNav";
import ProfileScreen2 from "../Screens/ProfileScreen2";
import ManageProductScreen from "../Screens/ManageProductScreen";
import { useSelector } from "react-redux";
import LoginScreen2 from "../Screens/LoginScreen2";
import CreateBlogScreen from "../Screens/CreateBlogScreen";
import CategoriesBlogScreen from "../Screens/CategoriesBlogScreen";

const Tab = createBottomTabNavigator();

function BottomNav() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log("🚀 ~ file: BottomNav.js:20 ~ BottomNav ~ userInfo:", userInfo)
  return (
    <Tab.Navigator
      backBehavior="Trang chủ"
      initialRouteName="Trang chủ"
      screenOptions={{
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Trang chủ"
        component={StackNav}
        options={{
          tabBarActiveTintColor: "#FFA500",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { paddingBottom: 5 },
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Ionicons name="home-sharp" size={24} color="#FFA500" />
              ) : (
                <Ionicons name="home-outline" size={24} color="gray" />
              )}
            </Center>
          ),
        }}
      />
      {/* Quản lí tin */}
      <Tab.Screen
        name="Quản lý tin"
        component={userInfo ? ManageProductScreen : LoginScreen2}
        options={{
          tabBarActiveTintColor: "#FFA500",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Ionicons name="newspaper" size={24} color="#FFA500" />
              ) : (
                <Ionicons name="newspaper-outline" size={24} color="gray" />
              )}
            </Center>
          ),
        }}
      />
      {/* Đăng tin */}
      <Tab.Screen
        name="Đăng tin"
        component={CategoriesBlogScreen}
        options={{
          tabBarActiveTintColor: "#FFA500",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <SimpleLineIcons name="note" size={24} color="#FFA500" />
              ) : (
                <SimpleLineIcons name="note" size={24} color="gray" />
              )}
            </Center>
          ),
        }}
      />

      {/* Cá nhân */}

      <Tab.Screen
        name="Cá nhân"
        component={ProfileScreen2}
        options={{
          tabBarActiveTintColor: "#FFA500",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome name="user" size={24} color="#FFA500" />
              ) : (
                <FontAwesome name="user-o" size={24} color="gray" />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: Colors.white,
    height: 50,
  },
});

export default BottomNav;
