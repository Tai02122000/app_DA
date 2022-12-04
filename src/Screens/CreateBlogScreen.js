import {
  Box,
  Text,
  ScrollView,
  HStack,
  Pressable,
  View,
  Image,
  VStack,
  Input,
  TextArea,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

function CreateBlogScreen({ navigation, route }) {
  const [New, setNew] = useState(false);
  const category = route.params;
  return (
    <Box safeAreaTop bg={Colors.white}>
      {/* Header */}
      <HStack space={3} w="full" px={4} bg="#FFA500" py={3} alignItems="center">
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
        <Text bold fontSize={17} color="white">
          Đăng tin
        </Text>
      </HStack>
      {/* Body */}
      <ScrollView showsVerticalScrollIndicator={false} mt={5}>
        <View bg={Colors.white} w="full" px={3}>
          <Text fontSize={13} color="gray.500">
            Danh mục
          </Text>
          <Pressable
            mt={1}
            borderWidth={1}
            p={3}
            rounded={5}
            flexDirection="row"
            justifyContent="space-between"
            borderColor="gray.400"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text>{category}</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.deepestGray}
              style={{ alignSelf: "center" }}
            />
          </Pressable>
        </View>
        <VStack mt={5} px={3}>
          <View>
            <Text fontSize={17} color="gray.400">
              THÔNG TIN CHI TIẾT
            </Text>
          </View>
          <View mt={5}>
            <Input
              placeholder="Link Ảnh Bìa"
              borderColor={"gray.500"}
              _focus={{ borderColor: "gray.500", bg: "white" }}
            />
            <Input
              placeholder="Link Ảnh 1"
              borderColor={"gray.500"}
              mt={3}
              _focus={{ borderColor: "gray.500", bg: "white" }}
            />
            <Input
              placeholder="Link Ảnh 2"
              borderColor={"gray.500"}
              mt={3}
              _focus={{ borderColor: "gray.500", bg: "white" }}
            />
          </View>
          <Text mt={5} color={"gray.500"}>
            Tình trạng
          </Text>
          <View mt={2} flexDirection="row">
            <Pressable
              borderWidth={0.5}
              p={2}
              rounded={10}
              borderColor="white"
              bg={New === false ? "#FFEC8B" : "gray.200"}
              onPress={() => setNew(false)}
            >
              <Text color={New === false ? "#FFA500" : "black"}>
                Đã sử dụng
              </Text>
            </Pressable>
            <Pressable
              ml={5}
              borderWidth={0.5}
              p={2}
              rounded={10}
              borderColor="white"
              bg={New === false ? "gray.200" : "#FFEC8B"}
              w={50}
              alignItems="center"
              onPress={() => setNew(true)}
            >
              <Text color={New === false ? "black" : "#FFA500"}>Mới</Text>
            </Pressable>
          </View>
          <View mt={5}>
            <Input
              placeholder="Giá"
              borderColor={"gray.500"}
              keyboardType="numeric"
              _focus={{ borderColor: "gray.500", bg: "white" }}
            />
            <Input
              placeholder="Tiêu đề"
              borderColor={"gray.500"}
              mt={3}
              _focus={{ borderColor: "gray.500", bg: "white" }}
            />
            <TextArea
              mt={3}
              h={20}
              placeholder="Mô tả chi tiết"
              borderColor={"gray.500"}
              w="100%"
              _focus={{ borderColor: "gray.500", bg: "white" }}
            />
          </View>
          <View mt={5}>
            <Text fontSize={17} color="gray.400">
              VỀ NGƯỜI BÁN
            </Text>
          </View>
          <View mt={2}>
            <Input
              placeholder="Thành phố"
              borderColor={"gray.500"}
              mt={3}
              _focus={{ borderColor: "gray.500", bg: "white" }}
            />
            <Input
              placeholder="Quận/huyện"
              borderColor={"gray.500"}
              mt={3}
              _focus={{ borderColor: "gray.500", bg: "white" }}
            />
            <Input
              placeholder="Phường/Xã"
              borderColor={"gray.500"}
              mt={3}
              _focus={{ borderColor: "gray.500", bg: "white" }}
            />
          </View>
          <View mb={100} alignItems="center" mt={5}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                width: 150,
                alignItems: "center",
                backgroundColor: "#FFA500",
                borderColor: "white",
              }}
            >
              <Text color="white" bold>
                ĐĂNG TIN
              </Text>
            </TouchableOpacity>
          </View>
        </VStack>
      </ScrollView>
    </Box>
  );
}

export default CreateBlogScreen;
