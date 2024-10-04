import { Text, View } from "react-native";
import Login from './../components/Login';
import { auth } from "./../configs/FirebaseConfig";
import { Redirect, useRouter } from "expo-router";
import ButtonCom from './../components/ButtonCom'
export default function Index() {
  const user = auth.currentUser;
  const router = useRouter();
  const myTripClick=()=>{
    router.navigate('../mytrip');
  }
  return (

    <View
      style={{
        flex: 1,

      }}
    >
      {user ?
        <Redirect href={"../mytrip"} />
        : <Login />
      }
      <ButtonCom val="mytrip" onClick={myTripClick}/>
      <ButtonCom val="discover"/>
    </View>
  );
}
