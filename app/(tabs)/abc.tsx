import { StyleSheet, Text, View } from "react-native";

export default function Sum() {
    var a = 20;
    var b = 30
    var c = a + b;
    var arr = [10, 'woman', 'cat', 29.67, true];

    return (
        <View>
            <Text>{c}</Text>
            {arr.map((element,index) => (
                <Text key={index}>{element}</Text>
            ))}
        </View>
    );
}
