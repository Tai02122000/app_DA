import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Pressable,
  ScrollView,
  Spacer,
  Text,
  View,
} from "native-base";
import Colors from "../../color";
import { Storage } from "expo-storage";

function Reject() {
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
        {product.slice(4, 6).map((product, index) => (
          <View
            key={product._id}
            mt={2}
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

            <View ml={2} w="35%">
              <Text isTruncated>{product.name}</Text>
              <Text bold>
                {currencyFormatter(product.price, defaultOptions)}đ
              </Text>
            </View>
            <Spacer />
            <Pressable
              borderWidth={0.8}
              mr={5}
              rounded={10}
              pr={4}
              pl={4}
              pt={1}
              pb={1}
            >
              <Text>Đã bị huỷ</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </Box>
  );
}

export default Reject;
