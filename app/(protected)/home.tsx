import { Link } from 'expo-router';
import { Text, View } from 'tamagui';

export default function Tab() {
  return (
    <View className="flex-1 justify-center items-center">
      <Link href="/test/1">
        <Text>
          link to 1
        </Text>
      </Link>
    </View>
  );
}