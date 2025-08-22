import { Stack } from "expo-router"


export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="home" options={{ title: "Home" }} />
            <Stack.Screen name="cart" options={{ title: "Cart" }} />
            <Stack.Screen name="auth" options={{ title: "Auth" }} />
        </Stack>
    )
}