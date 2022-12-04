import React from "react";
import { ScrollView, Text, Box, Center,VStack,FormControl,Input } from "native-base";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";

const Inputs = [
  {
    Label: "NAME",
    type: "text",
  },
  {
    Label: "PHONE",
    type: "email",
  },
  {
    Label: "CITY",
    type: "text",
  },
  {
    Label: "COUNTRY",
    type: "text",
  },
  {
    Label: "ADDRESS",
    type: "text",
  },
];

function ShippingScreen() {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DELIVERY ADRESS
        </Text>
      </Center>
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5} pb={10}>
            {Inputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {i.Label}
                </FormControl.Label>
                <Input
                  borderColor={Colors.main}
                  borderWidth={0.2}
                  bg={Colors.subGreen}
                  py={4}
                  color={Colors.main}
                  fontSize={15}
                  _focus={{
                    bg: Colors.subGreen,
                    borderWidth: 1,
                    borderColor: Colors.main,
                  }}
                  type={i.type}
                />
              </FormControl>
            ))}
            <Buttone bg={Colors.main} color={Colors.white} mt={5} onPress={()=>navigation.navigate('Checkout')}>
              CONTINUE
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default ShippingScreen;
