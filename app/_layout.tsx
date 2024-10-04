import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    "rajdhani-bold": require("./../assets/fonts/Rajdhani-Bold.ttf"),
    "rajdhani-medium": require("./../assets/fonts/Rajdhani-Medium.ttf"),
    "rajdhani-regular": require("./../assets/fonts/Rajdhani-Regular.ttf"),
  })
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      {/* <Stack.Screen name="index" options={{
        headerShown:false
      }}/> */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
