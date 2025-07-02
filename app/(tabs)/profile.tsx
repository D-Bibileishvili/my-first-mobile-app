import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const profile = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await AsyncStorage.removeItem("user-token");
    router.replace("/(auth)");
  };
  return (
    <View>
      <Text>profile</Text>
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});