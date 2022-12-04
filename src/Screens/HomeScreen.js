import React, { useEffect, useState } from "react";
import {
  Text,
  Box,
  ScrollView,
  Image,
  Button,
  Center,
  HStack,
  View,
} from "native-base";
import HomeSearch from "../Components/HomeSearch";
import HomeProducts from "../Components/HomeProducts";
import Colors from "../color";
import SlideScreen from "../Components/SlideScreen";
import { ActivityIndicator, RefreshControl } from "react-native";
import axios from "axios";
import { Storage } from "expo-storage";
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const categories = [
  {
    label: "Xe cộ",
    image: require("../../assets/xeco.png"),
  },
  {
    label: "Giải trí, thể thao",
    image: require("../../assets/giaitri.png"),
  },
  {
    label: "Đồ gia dụng, nội thất, cây cảnh",
    image: require("../../assets/noithat.jpg"),
  },
  {
    label: "Thời trang",
    image: require("../../assets/thoitrang.jpg"),
  },
  {
    label: "Tủ lạnh, máy lạnh",
    image: require("../../assets/tulanh.jpg"),
  },
  {
    label: "Đồ điện tử",
    image: require("../../assets/dodientu.jpg"),
  },
];
const Url = `http://192.168.1.6:5000`;

function HomeScreen() {
  const [pro, setPro] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${Url}/api/product/`);
      const setProduct = await Storage.setItem({
        key: "productList",
        value: JSON.stringify(data),
      });
      setPro(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setLoading(true);
    fetchProducts();
    wait(1000).then(() => {
      setRefreshing(false);
      setLoading(false);
    });
  }, []);
  return (
    <Box bg={Colors.gray} flex={1}>
      <HomeSearch />
      {loading ? (
        <View flex={1} justifyContent="center" alignItems="center">
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {/* Slide */}
          <SlideScreen />
          {/* Categories */}
          <Box bg={Colors.white} mt={2} pb={5}>
            <Text bold p={3} fontSize={15}>
              Khám phá danh mục
            </Text>
            <HStack>
              {categories.slice(0, 3).map((i, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  alignItems="center"
                  p={0}
                  pt={2}
                  _pressed={{ bg: "#E8E8E8" }}
                >
                  <Center>
                    <Image
                      source={i.image}
                      alt="Xe"
                      h={70}
                      flex={1}
                      w={70}
                      resizeMode="contain"
                      rounded={10}
                    />
                  </Center>
                  <Text textAlign="center" flex={1} width={130}>
                    {i.label}
                  </Text>
                </Button>
              ))}
            </HStack>

            <HStack>
              {categories.slice(3, 6).map((i, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  alignItems="center"
                  p={0}
                  pt={2}
                  _pressed={{ bg: "#E8E8E8" }}
                >
                  <Center>
                    <Image
                      source={i.image}
                      alt="Xe"
                      h={70}
                      flex={1}
                      w={70}
                      resizeMode="contain"
                      rounded={10}
                    />
                  </Center>
                  <Text textAlign="center" flex={1} width={130}>
                    {i.label}
                  </Text>
                </Button>
              ))}
            </HStack>
          </Box>
          {/* Products */}
          <Box bg={Colors.white} mt={2} pb={5}>
            <Text bold p={3} fontSize={15}>
              Tin đăng mới
            </Text>
            <HomeProducts products={pro} />
          </Box>
        </ScrollView>
      )}
    </Box>
  );
}

export default HomeScreen;
