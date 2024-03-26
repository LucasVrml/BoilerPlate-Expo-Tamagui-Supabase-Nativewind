import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, View } from "tamagui";

export default function WelcomeScreen() {
	const router = useRouter();

	return (
		<SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
			<View className="flex flex-row gap-x-4">
				<Button
					className="flex-1"
					onPress={() => {
						router.push("/signIn");
					}}
				>
					<Text>Sign in</Text>
				</Button>
			</View>
		</SafeAreaView>
	);
}
