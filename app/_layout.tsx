import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false, headerTitle: "main" }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, headerTitle: "main" }}
      />
      <Stack.Screen
        name="products"
        options={{ headerTitle: "Product details" }}
      />
    </Stack>
  );
};

export default _layout;
