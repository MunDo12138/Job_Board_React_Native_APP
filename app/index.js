import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";

export default function Index() {
    const router = useRouter();

    useEffect(() => {
        // Navigate to home after component mounts
        const timer = setTimeout(() => {
            router.replace("/home");
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FAFAFC' }}>
            <ActivityIndicator size="large" color="#FF7754" />
            <Text style={{ marginTop: 20, fontSize: 16, color: '#83829A' }}>Loading JobSift...</Text>
        </View>
    );
}