import { Box, Text, ScrollView, Pressable, View, VStack } from "native-base";
import React from "react";
import Colors from "../color";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  "Xe cộ",
  "Đồ điện tử",
  "Thời trang, đồ dùng cá nhân",
  "Giải trí thể thao",
  "Tủ lạnh, máy giặt",
  "Đồ gia dụng, nội thất",
];
function CategoriesBlogScreen({ navigation }) {
  return (
    <Box safeAreaTop bg={Colors.white}>
      {/* Header */}
      <View space={3} w="full" px={4} bg="#FFA500" py={3} alignItems="center">
        <Text bold fontSize={17} color="white" textAlign="center">
          Đăng tin
        </Text>
      </View>
      {/* Body */}
      <ScrollView showsVerticalScrollIndicator={false} mt={5}>
        <View
          flexDirection="row"
          bg={Colors.white}
          w="full"
          px={3}
          alignItems="center"
        >
          <Text bold>CHỌN DANH MỤC</Text>
        </View>
        <VStack mt={5}>
          {categories.map((cate, index) => (
            <Pressable
              key={index}
              px={3}
              h={10}
              borderTopWidth={0.5}
              borderTopColor="gray.400"
              borderBottomWidth={0.5}
              borderBottomColor="gray.400"
              _pressed={{ opacity: 0.5 }}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              onPress={() => {
                navigation.navigate("CreateBlog", cate);
              }}
            >
              <Text>{cate}</Text>
              <Ionicons
                name="chevron-forward"
                size={28}
                color={Colors.deepestGray}
                style={{ alignSelf: "center" }}
              />
            </Pressable>
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
}

export default CategoriesBlogScreen;
