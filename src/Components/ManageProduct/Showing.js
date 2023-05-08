import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "native-base";
import Colors from "../../color";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Storage } from "expo-storage";

function Showing() {
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
    <Box h="full" bg={Colors.gray}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {product.slice(0, 3).map((product, index) => (
          <View key={product._id}>
            <View
              mt={3}
              bg={Colors.white}
              flexDirection="row"
              alignItems="center"
            >
            <View w="30%" borderRightWidth={0.5} borderRightColor="gray.400">
            <Image
              source={{
                uri: product.image,
              }}
              alt="img"
              h={20}
              
              resizeMode="contain"
            />
          </View>

              <View ml={2} w="40%">
                <Text isTruncated>{product.name}</Text>
                <Text bold color={Colors.red}>
                  {currencyFormatter(product.price, defaultOptions)}đ
                </Text>
                <Text color="gray.500" fontSize={11}>
                  23/12/2022 15:09
                </Text>
              </View>
            </View>
            <View
              flexDirection="row"
              flex={1}
              justifyContent="space-between"
              bg={Colors.white}
              mb={3}
            >
              <Pressable
                w="50%"
                borderWidth={0.6}
                borderColor="gray.300"
                alignItems="center"
                p={1}
              >
                <HStack space={2}>
                  <Ionicons
                    name="ios-eye-off-outline"
                    size={24}
                    color="#3366FF"
                  />
                  <Text color="#3366FF">Đã bán/Ẩn tin</Text>
                </HStack>
              </Pressable>
              <Pressable
                w="50%"
                borderWidth={0.6}
                borderColor="gray.300"
                alignItems="center"
                p={1}
              >
                <HStack space={2}>
                  <Feather name="edit" size={24} color="#3366FF" />
                  <Text color="#3366FF">Chỉnh sửa</Text>
                </HStack>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </Box>
  );
}

export default Showing;
