import { Tabs } from "expo-router/tabs";

export default () => {
    return (
        <Tabs
            screenOptions={{ headerShown: false }}
        >
            <Tabs.Screen name="OrderPage" />
            <Tabs.Screen name="ProductPage" />
            <Tabs.Screen name="RecordPage" />
            <Tabs.Screen name="ExchangePage" />
        </Tabs>
    );
};
