import { Text } from "react-native";

const Example = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                {Object.entries(props.item).map(([key, value], index) => (
                    <li key={index}>
                        <strong>{key}:</strong> {value}
                    </li>
                ))}
            </ul>
            <button onClick={props.func}>click me</button>
        </div>
    );
};
export default Example;