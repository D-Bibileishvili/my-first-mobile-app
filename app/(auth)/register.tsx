import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const register = () => {
  const router = useRouter();
  const handleGoLogin = () => router.back();
  return (
    <View>
      <Text>Register Page</Text>
      <Text>already have an account?</Text>
      <Button title="go to Login" onPress={handleGoLogin} />
    </View>
  );
};

export default register;