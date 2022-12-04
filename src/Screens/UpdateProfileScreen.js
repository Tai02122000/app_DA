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
} from "native-base";
import React from "react";
import Colors from "../color";
import { Ionicons } from "@expo/vector-icons";

function UpdateProfileScreen({ navigation, route }) {
  const userInfo = route.params;
  return (
    <Box safeAreaTop bg={Colors.white}>
      {/* Header */}
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
        <Text bold fontSize={17} color="white">
          Cài đặt thông tin
        </Text>
      </HStack>
      {/* Body */}
      <ScrollView showsVerticalScrollIndicator={false} py={3}>
        <View
          flexDirection="row"
          bg={Colors.white}
          w="full"
          px={3}
          alignItems="center"
        >
          <Image
            source={require("../../assets/avatar.jpg")}
            h={20}
            w={20}
            alt="avatar"
            rounded="full"
          />
          <VStack
            ml={5}
            borderWidth={0.5}
            flex={1}
            p={3}
            rounded={5}
            borderColor="gray.300"
          >
            <Text fontSize={13} color="gray.400">
              Họ và tên
            </Text>
            <Input
              borderWidth={0}
              p={0}
              fontSize={17}
              _focus={{ bg: Colors.white }}
              value={userInfo.name}
            />
          </VStack>
        </View>
        <View
          px={3}
          mt={3}
          borderBottomWidth={0.5}
          borderBottomColor="gray.400"
        >
          <Text color="gray.400">Số điện thoại</Text>
          <Text mt={1}>{userInfo.phone}</Text>
        </View>
        <View
          px={3}
          mt={3}
          borderBottomWidth={0.5}
          borderBottomColor="gray.400"
        >
          <Text color="gray.400">Email</Text>
          <Text mt={1}>{userInfo.email}</Text>
        </View>
        <Pressable
          px={3}
          mt={3}
          borderBottomWidth={0.5}
          borderBottomColor="gray.400"
          _pressed={{ opacity: 0.5 }}
        >
          <HStack justifyContent="space-between">
            <VStack>
              <Text color="gray.400">Mật khẩu</Text>
              <Text mt={1}>*******</Text>
            </VStack>
            <Ionicons
              name="chevron-forward"
              size={28}
              color={Colors.deepestGray}
              style={{ alignSelf: "center" }}
            />
          </HStack>
        </Pressable>
        <Pressable
          px={3}
          mt={3}
          borderBottomWidth={0.5}
          borderBottomColor="gray.400"
          _pressed={{ opacity: 0.5 }}
        >
          <HStack justifyContent="space-between">
            <VStack>
              <Text color="gray.400">Thành phố</Text>
              <Text mt={1}>Đà nẵng</Text>
            </VStack>
            <Ionicons
              name="chevron-forward"
              size={28}
              color={Colors.deepestGray}
              style={{ alignSelf: "center" }}
            />
          </HStack>
        </Pressable>
        <Pressable
          px={3}
          mt={3}
          borderBottomWidth={0.5}
          borderBottomColor="gray.400"
          _pressed={{ opacity: 0.5 }}
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text color="#FFA500" marginY={3}>
            Thêm quận/huyện
          </Text>
          <Ionicons
            name="chevron-forward"
            size={28}
            color={Colors.deepestGray}
            style={{ alignSelf: "center" }}
          />
        </Pressable>
        <Pressable
          px={3}
          mt={3}
          borderBottomWidth={0.5}
          borderBottomColor="gray.400"
          _pressed={{ opacity: 0.5 }}
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text color="#FFA500" marginY={3}>
            Thêm địa chỉ
          </Text>
          <Ionicons
            name="chevron-forward"
            size={28}
            color={Colors.deepestGray}
            style={{ alignSelf: "center" }}
          />
        </Pressable>
      </ScrollView>
    </Box>
  );
}

export default UpdateProfileScreen;
