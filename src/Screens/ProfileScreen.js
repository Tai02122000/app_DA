import {
  Box,
  Text,
  ScrollView,
  View,
  Image,
  VStack,
  HStack,
  Spacer,
} from "native-base";
import React, { useEffect, useState } from "react";
import Colors from "../color";
import { Pressable, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign, Fontisto } from "@expo/vector-icons";
import { Storage } from "expo-storage";
function ProfileScreen({ navigation, route }) {
  const userInfo = route.params;
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    const productList = await Storage.getItem({ key: "productList" });
    setProduct(JSON.parse(productList));
  };
  useEffect(() => {
    getProduct();
  }, []);
  const defaultOptions = {
    significantDigits: 2,
    thousandsSeparator: ",",
    decimalSeparator: ".",
    symbol: "",
  };

  const currencyFormatter = (value, options) => {
    if (typeof value !== "number") value = 0.0;
    options = { ...defaultOptions, ...options };
    value = value.toFixed(options.significantDigits);

    const [currency, decimal] = value.split(".");
    return `${options.symbol} ${currency.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      options.thousandsSeparator
    )}`;
  };

  return (
    <Box safeAreaTop bg={Colors.gray}>
      <HStack
        space={3}
        w="full"
        px={4}
        bg="#FFA500"
        py={3}
        alignItems="center"
        safeAreaTop
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Text bold fontSize={17} color="black">
          {userInfo.name}
        </Text>
      </HStack>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          flexDirection="row"
          bg={Colors.white}
          w="full"
          px={3}
          py={3}
          alignItems="center"
        >
          <Image
            source={require("../../assets/avatar.jpg")}
            h={20}
            w={20}
            alt="avatar"
            rounded="full"
          />
          <VStack ml={5}>
            <Text bold fontSize={17} ml={5}>
              {userInfo.name}
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 25,
                alignItems: "center",
                textAlign: "center",
                marginTop: 2,
                color: Colors.white,
                borderColor: Colors.deepestGray,
                padding: 5,
                paddingRight: 10,
                paddingLeft: 10,
              }}
              onPress={() => {
                navigation.navigate("UpdateProfile", userInfo);
              }}
            >
              <Text fontSize={12}>Chỉnh sửa thông tin</Text>
            </TouchableOpacity>
          </VStack>
        </View>
        <View bg={Colors.white}>
          <VStack>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                borderTopWidth: 0.6,
                borderTopColor: Colors.deepGray,
              }}
            >
              <AntDesign name="staro" size={14} color="black" />
              <Text fontSize={14} ml={2} color="gray.400">
                Đánh giá: Chưa có đánh giá
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Fontisto name="date" size={14} color="black" />
              <Text fontSize={14} ml={2} color="gray.400">
                Ngày tham gia:
              </Text>
              <Text fontSize={14}> {userInfo.createdAt}</Text>
            </View>
          </VStack>
        </View>
        <Text color="#808080" bold fontSize={15} p={3}>
          Tin đang đăng
        </Text>
        <View bg={Colors.white} mb={20}>
          <VStack>
            {product.slice(0, 3).map((product) => (
              <TouchableOpacity
                key={product._id}
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                  borderBottomWidth: 0.6,
                  borderBottomColor: Colors.deepGray,
                }}
              >
                <Image
                  source={{
                    uri: product.image,
                  }}
                  alt="icon"
                  h={20}
                  w="25%"
                  resizeMode="contain"
                />
                <VStack>
                  <Text fontSize={15} ml={2} isTruncated w={250}>
                    {product.name}
                  </Text>
                  <Text fontSize={15} ml={2} bold color="red.500">
                    {currencyFormatter(product.price, defaultOptions)}đ
                  </Text>
                  <Spacer />
                  <Text fontSize={13} ml={2} color="gray.400">
                    22/10/2024
                  </Text>
                </VStack>
              </TouchableOpacity>
            ))}
          </VStack>
        </View>
      </ScrollView>
    </Box>
  );
}

export default ProfileScreen;
