import { Stack } from "expo-router";

export default () => {
    return (
        <Stack screenOptions={{ headerTitle: "" }}>
            <Stack.Screen name="NotificationPage" />
        </Stack>
    );
};
