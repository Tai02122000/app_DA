import React from "react";
import {
  ScrollView,
  Text,
  Box,
  Center,
  VStack,
  Image,
  HStack,
  Spacer,
} from "native-base";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Inputs = [
  {
    Image:
      "https://seeklogo.com/images/M/momo-logo-ED8A3A0DF2-seeklogo.com.png",
    alt: "momo",
    icon: "Ionicons",
  },
  {
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png",
    alt: "paypal",
    icon: "fontAwesome",
  },
];

function PaymentScreen() {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          PAYMENT METHOD
        </Text>
      </Center>
      <Box h="full" bg={Colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5} pb={10}>
            {Inputs.map((i, index) => (
              <HStack
                key={index}
                alignItems="center"
                bg={Colors.white}
                px={3}
                py={1}
                justifyContent="space-between"
                rounded={10}
              >
                <Box>
                  <Image
                    source={{
                      uri: i.Image,
                    }}
                    alt={i.alt}
                    resizeMode="contain"
                    w={60}
                    h={50}
                  />
                </Box>
                {i.icon === "Ionicons" ?
                <Ionicons
                  name="checkmark-circle"
                  size={30}
                  color={Colors.main}
                /> :
                <FontAwesome  
                  name="circle-thin"
                  size={30}
                  color={Colors.main}
                />
                }
              </HStack>
            ))}

            <Buttone bg={Colors.main} color={Colors.white} mt={5} onPress={()=>navigation.navigate('Porder')}>
              CONTINUE
            </Buttone>
            <Text italic textAlign="center">
                Payment method is <Text bold>Momo</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default PaymentScreen;
