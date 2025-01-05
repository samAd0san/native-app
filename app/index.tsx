import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-4xl text-green-600">بسم الله!</Text>
      <Link href="/sign-in"> Sign In </Link>
      <Link href="/profile"> Profile </Link>

    </View>
  );
}
