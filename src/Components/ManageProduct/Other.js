import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Spacer,
  Text,
  View,
} from "native-base";
import Colors from "../../color";
import { FontAwesome } from "@expo/vector-icons";
import { Storage } from "expo-storage";

function Other() {
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
  const [show, setShow] = useState(false);
  return (
    <Box h="full" bg={Colors.gray}>
      <Pressable
        bg={Colors.white}
        p={2}
        alignItems="center"
        shadow={1}
        onPress={() => (show ? setShow(false) : setShow(true))}
      >
        <HStack>
          <Text fontSize={16}>Lọc tin</Text>
          <FontAwesome
            name="sort-down"
            size={16}
            color="black"
            style={{ marginLeft: 5 }}
          />
        </HStack>
      </Pressable>
      {show && (
        <View bg={Colors.white} mt={1}>
          <Pressable
            p={3}
            borderBottomWidth={0.5}
            w="full"
            alignItems="center"
            borderBottomColor={Colors.deepestGray}
            onPress={() => setShow(false)}
          >
            <Text>Tin đã ẩn (1)</Text>
          </Pressable>
          <Pressable
            p={3}
            w="full"
            alignItems="center"
            onPress={() => setShow(false)}
          >
            <Text>Tin đợi duyệt (1)</Text>
          </Pressable>
        </View>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        {product.slice(7, 9).map((product) => (
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

            <View ml={2} w="40%">
              <Text color={Colors.red} bold>
                Đợi duyệt
              </Text>
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
              <Text>Hiện tin</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </Box>
  );
}

export default Other;
