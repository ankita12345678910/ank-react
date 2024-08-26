import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sum() {
    var a = 20;
    var b = 30
    var c = a + b;
    var arr = [10, 'woman', 'cat', 29.67, true];
    let [myObj, setMyObj] = useState({
        key1: "value1",
        key2: "value2",
        key3: "value3"
    })
    let [list, setMyList] = useState([]);
    let [item, setItem] = useState("");
    const change = () => {
        setMyObj(
            prevObj => ({
                ...prevObj,
                key1: "updated value 1"
            })
        )
    }
    const addToList = () => {
        list.push(item)
        setMyList([...list])

    }
    const removeItem = (index) => {
        list.splice(index, 1)
        setMyList([...list])
    }
    return (
        <div>
            <table>
                <tbody>
                    {
                        list.length !== 0 ? (
                            list.map((ele, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{ele}</td>
                                        <td><button onClick={() => removeItem(index)}>remove</button></td>
                                    </tr>
                                )
                            })
                        ) : (<tr></tr>)
                    }
                </tbody>
            </table>
            <h1>{list.length}</h1>
            <input type="text" onChange={(e) => setItem(e.target.value)} placeholder="name" />
            <button onClick={addToList}>Add</button>
            <Text>{c}</Text>
            {arr.map((element, index) => (
                <Text key={index}>{element}</Text>
            ))}
            <h1>{myObj.key1}</h1>
            <h1>{myObj.key2}</h1>
            <h1>{myObj.key3}</h1>
            <button onClick={change}>Change</button>
            <br />
            <br />
        </div>
    );
}
