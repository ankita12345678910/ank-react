import Example from '../../components/Example'; // Use the correct relative path


const Test = () => {
    const obj = {
        name: "rain",
        age: 20,
        roll: 10,
        college: "xyz"
    }
    function btnClick() {
        alert("Heloo i m ankita");
    }
    return (
        <div>
            <Example title="this is a computer" item={obj} func={btnClick} />
        </div>
    );
};
export default Test;