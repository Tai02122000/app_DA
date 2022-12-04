import React, { useState } from "react";
import { Text } from "native-base";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useWindowDimensions, StyleSheet } from "react-native";
import Showing from "./Showing";
import Reject from "./Reject";
import Other from "./Other";
import Colors from "../../color";

const renderScene = SceneMap({
  first: Showing,
  second: Reject,
  third: Other,
});

export default function Tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "ĐANG HIỂN THỊ",
    },
    {
      key: "second",
      title: "BỊ TỪ CHỐI",
    },
    {
      key: "third",
      title: "KHÁC",
    },
  ]);

  const renderTabsBar = (props) => (
    <TabBar
      {...props}
      tabStyle={styles.tabStyle}
      style={{elevation:1,backgroundColor:Colors.white}} {...props}
      activeColor="#FFA500"
      inactiveColor="gray"
      pressColor="white"
      renderLabel={({ route, color }) => (
        <Text style={{ color, ...styles.text }}>{route.title}</Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabsBar}
    />
  );
}

const styles = StyleSheet.create({
  tabStyle: {

  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
