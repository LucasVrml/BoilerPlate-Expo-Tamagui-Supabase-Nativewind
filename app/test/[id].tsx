import { Stack, useGlobalSearchParams } from "expo-router";
import { Text, View } from "tamagui";

const testDynamicRoute = () => {

    const { id } = useGlobalSearchParams()

    return <View className="flex-1 justify-center items-center">
        <Stack.Screen options={{ headerShown: true, headerTitle: "", headerBackTitleVisible: false, headerTransparent: true }} />
        <Text>
            route to {JSON.stringify(id)}
        </Text>
    </View>
}

export default testDynamicRoute;