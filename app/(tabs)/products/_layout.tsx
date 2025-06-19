import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: true, animation: 'fade_from_bottom' }}>
        <Stack.Screen name='index' />
        <Stack.Screen name='id' options={{headerShown: true}}/>
    </Stack>
  )
}

export default _layout