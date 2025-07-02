import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const index = () => {
  const router = useRouter();
  const handleGoRegister = () => router.push("/register");

  const [userInfo, setUserInfo] = useState({
    username: "johnd",
    password: "m38rmF$",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const checkUser = async () => {
    const result = await AsyncStorage.getItem("user-token");
    if (result !== null) {
      router.replace("/(tabs)");
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const handleSubmit = async () => {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    });
    const result = await response.json();

    await AsyncStorage.setItem("user-token", JSON.stringify(result.token));
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="username"
        onChangeText={(text) => setUserInfo({ ...userInfo, username: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        secureTextEntry={!passwordVisible}
        onChangeText={(text) => setUserInfo({ ...userInfo, passwrod: text })}
      />
      <TouchableOpacity
        activeOpacity={0.2}
        onPress={() => setPasswordVisible(!passwordVisible)}
      >
        <Text>see password</Text>
      </TouchableOpacity>
      <Pressable style={styles.submit} onPressIn={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>
      <View style={styles.button}>
        <Text>don't have an account?</Text>
        <Button title="go to Register" onPress={handleGoRegister} />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  title: {
    marginVertical: 24,
    fontSize: 28,
    fontWeight: "600",
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    height: 48,
  },
  button: {
    alignItems: "center",
    marginTop: 40,
  },
  submit: {
    alignItems: "center",
    height: 48,
    backgroundColor: "maroon",
    borderRadius: 6,
    justifyContent: "center",
    marginTop: 24,
  },
  submitText: {
    color: "white",
    fontWeight: 600,
    fontSize: 18,
  },
});