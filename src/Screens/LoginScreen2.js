import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { Image, Box } from "native-base";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import CustomButton from "../Components/CustomButton";
import InputField from "../Components/InputField";
import Colors from "../color";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Actions/UserActions";

function LoginScreen2() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigation = useNavigation();
  const [validated, setValidated] = useState(true);
  const validate = (email) => {
    let reg = /^.{2,}\w+([\.-]?\w+)*@\w.{1,}([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setValidated(false);
    } else {
      setValidated(true);
      setEmail(email);
    }
  };

  const validatePass = (pass) => {
    let reg = /^.{7,}\w/;
    if (reg.test(pass) === false) {
      setPassword(null);
    } else {
      setPassword(pass);
    }
  };

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      navigation.navigate("Bottom");
      console.log(userInfo);
    }
  }, [userInfo]);
  const loginHander = () => {
    dispatch(login(email, password));
  };
  return (
    <Box
      safeAreaTop
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: Colors.white,
      }}
    >
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: "https://static.chotot.com/storage/assets/LOGIN/logo_register.png",
            }}
            alt="twiter"
            height={200}
            width={200}
          />
        </View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        ></Text>

        <InputField
          label="Email ID"
          icon={
            <MaterialIcons
              name="email"
              size={20}
              color="#666"
              style={{ marginRight: 15 }}
            />
          }
          keyboardType="email-address"
          onChangeText={(e) => {
            validate(e);
          }}
          autoComplete="email"
        />

        <InputField
          label="Password"
          icon={
            <Feather
              name="lock"
              size={20}
              color="#666"
              style={{ marginRight: 15 }}
            />
          }
          inputType="password"
          fieldButtonLabel="Forgot?"
          onChangeText={(e) => {
            validatePass(e);
          }}
          fieldButtonFunction={() => {}}
        />
        {error && (
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: Colors.red,
              paddingBottom: 10,
            }}
          >
            {error}
          </Text>
        )}
        {loading === true ? (
          <TouchableOpacity
            style={{
              backgroundColor: "gray",
              padding: 20,
              borderRadius: 10,
              marginBottom: 30,
            }}
          >
            <ActivityIndicator size="large" />
          </TouchableOpacity>
        ) : validated === true && password != null ? (
          <CustomButton
            label={"Login"}
            bg="#FF7F00"
            disabled={false}
            onPress={() => {
              Keyboard.dismiss();
              loginHander();
            }}
          />
        ) : (
          <CustomButton label={"Login"} bg="gray" disabled={true} />
        )}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <Image
              source={require("../../assets/google.png")}
              alt="google"
              height={10}
              width={10}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <Image
              source={require("../../assets/facebook.png")}
              alt="fb"
              height={10}
              width={10}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            {/* <TwitterSVG height={24} width={24} /> */}
            <Image
              source={require("../../assets/twiter.png")}
              alt="twiter"
              height={10}
              width={10}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>New to the app? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: "#4169E1", fontWeight: "700" }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Box>
  );
}

export default LoginScreen2;
