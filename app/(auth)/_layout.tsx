import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerTitle: 'Login'}} />
      <Stack.Screen name="register" options={{headerTitle: 'Register'}}/>
    </Stack>
  );
};

export default _layout;
