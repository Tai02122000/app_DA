import {
  Box,
  Text,
  ScrollView,
  Image,
  Heading,
  HStack,
  View,
  Input,
  Pressable,
  VStack,
  Center,
} from "native-base";
import React, { useEffect, useState } from "react";
import Colors from "../color";
import Rating from "../Components/Rating";
import Buttone from "../Components/Buttone";
import Review from "../Components/Review";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { URL_SERVER } from "../../settings/url";
const Url = URL_SERVER;
function SingleProductScreen({ route }) {
  const [imgActive, setImageActive] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  const [saveBlog, setSaveBlog] = useState(0);
  const onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setImageActive(slide);
      }
    }
  };

  const [pro, setPro] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${Url}/api/product/`);
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
    <Box safeAreaTop flex={1} bg={Colors.white}>
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
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
        <View
          flex={1}
          flexDirection="row"
          alignItems="center"
          bg={Colors.white}
          rounded={5}
        >
          <EvilIcons
            name="search"
            size={24}
            color="#8B8B7A"
            style={{ marginLeft: 5 }}
          />
          <Input
            placeholder="Tìm kiếm "
            w="85%"
            size={10}
            pl={2}
            bg={Colors.white}
            flex={1}
            type="search"
            h={9}
            borderWidth={0}
            _focus={{ bg: Colors.white }}
            variant="filled"
          />
        </View>

        <Pressable ml={3} onPress={() => navigation.navigate("Cart")}>
          <AntDesign name="shoppingcart" size={26} color="white" />
          <Box
            px={1}
            rounded="full"
            position="absolute"
            top={-5}
            left={3}
            bg={Colors.red}
            _text={{ color: Colors.white, fontSize: "11px" }}
          >
            5
          </Box>
        </Pressable>
      </HStack>
      <ScrollView px={3} showsVerticalScrollIndicator={false}>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled
            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            bg="white"
          >
            {product.imageList.map((image, index) => (
              <Image
                key={index}
                resizeMode="contain"
                alt="slide"
                source={{ uri: image }}
                w={400}
                h={300}
              />
            ))}
          </ScrollView>
          <View
            position="absolute"
            flexDirection="row"
            alignSelf="center"
            bottom={0}
          >
            {product.imageList.map((e, index) => (
              <Text
                key={index}
                fontSize={30}
                style={
                  imgActive == index
                    ? { color: "black", margin: 3 }
                    : { color: "white", margin: 3 }
                }
              >
                •
              </Text>
            ))}
          </View>
        </View>
        <View borderBottomWidth={0.2} borderBottomColor="#B5B5B5" pb={3}>
          <Heading bold fontSize={15} mb={2} lineHeight={22}>
            {product.name}
          </Heading>
          <View
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <VStack>
              <Heading bold color={Colors.red} fontSize={15}>
                {currencyFormatter(product.price, defaultOptions)}đ
              </Heading>
              <Rating value={product.rating} />
            </VStack>
            <Pressable
              p={1.5}
              rounded={30}
              borderWidth={0.5}
              borderColor={Colors.red}
              flexDirection="row"
              onPress={() => (saveBlog === 0 ? setSaveBlog(1) : setSaveBlog(0))}
            >
              <Text color={Colors.red} mr={2}>
                {saveBlog === 0 ? "Lưu tin" : "Đã lưu"}
              </Text>
              <Ionicons
                name={saveBlog === 0 ? "heart-outline" : "heart"}
                size={20}
                color={Colors.red}
              />
            </Pressable>
          </View>
        </View>
        <HStack
          alignItems="center"
          borderBottomColor="#B5B5B5"
          borderBottomWidth={0.2}
          pb={3}
        >
          <Box flex={1} flexDirection="row" pt={3} alignItems="center">
            <Pressable>
              <Image
                source={require("../../assets/avatar.jpg")}
                alt="avatar"
                h={10}
                w={10}
                resizeMode="contain"
                rounded="full"
              />
            </Pressable>
            <Text ml={3} bold>
              LUCKY START
            </Text>
          </Box>
          <Pressable
            mt={3}
            p={1.5}
            rounded={30}
            borderWidth={0.5}
            borderColor="#EE9A00"
          >
            <Text color="#EE9A00">Xem trang</Text>
          </Pressable>
        </HStack>

        <View>
          <Text lineHeight={24} textAlign="justify" mt={3}>
            {product.description}
          </Text>
          <Text underline color="#00405d" mt={5}>
            Liên hệ ngay: 012345789
          </Text>
          <View flexDirection="row" alignItems="center" mt={1}>
            <Image
              source={require("../../assets/tinhtrang.png")}
              alt="tinhtrang"
              h={5}
              w={5}
            />
            <Text ml={1}>Tình trạng: Đã sử dụng</Text>
          </View>
        </View>

        <View borderBottomColor="#B5B5B5" borderBottomWidth={0.2} mt={2}>
          <Text fontSize={18} bold color="#363636">
            Khu vực
          </Text>
        </View>

        <View flexDirection="row" alignItems="center" mt={2}>
          <EvilIcons name="location" size={24} color="black" />
          <Text>Phường Nhật Tân, Quận Tây Hồ, Hà Nội</Text>
        </View>
        <Buttone bg="#EE9A00" color={Colors.white} mt={10}>
          Thêm giỏ hàng
        </Buttone>
        <Review />
        <View pb={10}>
          <View
            flexDirection="row"
            justifyContent="space-between"
            borderBottomColor="#B5B5B5"
            borderBottomWidth={0.2}
            pb={2}
          >
            <Text bold>Tin đăng tương tự</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SimiliarProduct", pro)}
            >
              <Text bold color="#436EEE">
                Xem tất cả {">"}
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {pro.map((product) => (
              <TouchableOpacity
                key={product._id}
                alignItems="center"
                style={{
                  marginHorizontal: 15,
                  marginTop: 10,
                }}
                onPress={() => navigation.push("Single", product)}
              >
                <Center>
                  <Image
                    source={{
                      uri: product.image,
                    }}
                    alt="product"
                    h={120}
                    flex={1}
                    w="full"
                    resizeMode="cover"
                    rounded={3}
                  />
                </Center>
                <Text
                  flex={1}
                  numberOfLines={2}
                  isTruncated
                  w={110}
                  fontSize={16}
                >
                  {product.name}
                </Text>
                <Text color={Colors.red} bold>
                  {currencyFormatter(product.price, defaultOptions)}{" "}
                  <Text underline>đ</Text>
                </Text>
                <Rating value={product.rating} />
                <Text color={Colors.deepestGray}>tại Đồng Nai</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
