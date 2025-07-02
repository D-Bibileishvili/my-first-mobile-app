import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}>
        <Stack.Screen name='id' options={{headerShown: true}}/>
    </Stack>
  )
}

export default _layout