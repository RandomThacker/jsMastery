import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-red-500">
            <Text className="text-2xl">Testing app</Text>
            <Link href="/profile">Click here</Link>
            <StatusBar style="auto" />
        </View>
    );
}


