import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as yup from "yup";

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  username: yup.string().required("Username is required").min(3),
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required").min(6),
  confirmPassword: yup.string().required("Please confirm your password"),
});

const Register = () => {
  const router = useRouter();
  const handleGoLogin = () => router.back();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("✅ Registration successful:", data);
    router.replace("/(tabs)");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            <Text style={styles.title}>Register</Text>

            <Controller
              control={control}
              name="username"
              render={({ field }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  value={field.value}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                />
              )}
            />
            {errors.username && (
              <Text style={styles.error}>{errors.username.message}</Text>
            )}

            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  keyboardType="email-address"
                  value={field.value}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                />
              )}
            />
            {errors.email && (
              <Text style={styles.error}>{errors.email.message}</Text>
            )}

            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                  value={field.value}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                />
              )}
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password.message}</Text>
            )}

            <Controller
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  secureTextEntry
                  value={field.value}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                />
              )}
            />
            {errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword.message}</Text>
            )}
            
            <Button title="Register" onPress={handleSubmit(onSubmit)} />

            <View style={styles.button}>
              <Text>already have an account?</Text>
              <Button title="go to Login" onPress={handleGoLogin} />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 32,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  register: {
    alignItems: "center",
    height: 48,
    backgroundColor: "maroon",
    borderRadius: 6,
    justifyContent: "center",
    marginTop: 24,
  },
  error: {
    color: "red",
    marginBottom: 8,
  },
  button: {
    alignItems: "center",
    marginTop: 40,
  },
});
