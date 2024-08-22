import { StyleSheet, Text, View } from "react-native";



function TabTwoScreen({ a, b }) {

  return (
    <View>
      <Text style={styles.abc}>{a} The papayas {b}</Text>
    </View>
  );
}
export default function MainFunction() {
  var c = <TabTwoScreen a="Apple" b={4} />
  let age = 20;
  const flower = ['lily', 'sunflower', 'lotus', 'orchid'];
  return (
    <ul>
      <li>{c}</li>
      <li>{6 + 7 - 4 * 2}</li>
      <li style={{ backgroundColor: "yellow" }}>{new Date().getHours()}</li>
      <li><button onClick={() => alert("Hellllooooo")}>Click me</button></li>
      {age >= 18 ? <li>You are eligible for voter id card</li> : <li>You are not eligible for voter id card</li>}
      {(() => {

        if (age >= 18) {
          return <li>aaaaaaaaaa</li>
        }
      })()}
      {flower.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </ul>

  );
}

const styles = StyleSheet.create({
  abc: {
    fontSize: 50,
  }
})