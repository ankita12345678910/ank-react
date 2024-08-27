import { useEffect, useState } from "react"

export default function Example() {

    let [obj, setMyObj] = useState({
        fName: "",
        lName: "",
        dept: "",
        gender: "",
    });
    const change = (property, value) => {
        setMyObj(
            prevObj => ({
                ...prevObj,
                [property]: value
            })
        )
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(obj))
    }
    let [data, setData] = useState()
    useEffect(() => {
        (async () => {
            let response = await fetch('https://dummyjson.com/users/1')
            let json = await response.json()
            setData(json)
        })()

    })
    return (
        <div>
            <h2>
                {JSON.stringify(data)}
            </h2>
            <form onSubmit={formSubmit}>
                <br /><br />
                <input type="text" onChange={(e) => change("fName", e.target.value)} value={obj.fName} placeholder="firstName" />
                <br /><br />
                <input type="text" onChange={(e) => change("lName", e.target.value)} value={obj.lName} placeholder="lastName" />
                <br /><br />
                <select value={obj.dept} onChange={(e) => change("dept", e.target.value)}>
                    <option value="">select</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="EE">EE</option>
                </select>
                <br /><br />
                <input checked={obj.gender === "Male"} type="radio" onChange={(e) => change("gender", "Male")} name="gender" />Male
                <input type="radio" checked={obj.gender === "Female"} onChange={(e) => change("gender", "Female")} name="gender" />Female
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}