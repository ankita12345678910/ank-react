import React, { useRef, useEffect } from 'react';
import Example from '../../components/Example'; // Use the correct relative path

const Test = () => {
    const obj = {
        name: "rain",
        age: 20,
        roll: 10,
        college: "xyz"
    };

    function btnClick() {
        alert("Hello, I'm Ankita");
    }

    var demo = useRef(null);
    var myImage = useRef(null);
    const change=()=>{
            // demo.current.innerText = "This is a hook function";
            demo.innerText = "This is a hook";
            // document.getElementById('abc').innerText="ppppppppppppppppppp"
    }
    const imageChange=()=>{
        myImage.current.src = "https://placehold.co/600x400?text=Hello\nWorld";
    }

    return (
        <div>
            <img ref={myImage} src="https://placehold.co/600x400" alt="" />
            <button onClick={imageChange}></button>
            <Example title="This is a computer" item={obj} func={btnClick} />
            <h1 ref={(xyz)=>demo=xyz}>jii</h1>
            {/* <h1 id='abc' ref={(xy)=>demo=xy}>hee</h1> */}
            <button onClick={change}>change</button>

        </div>
    );
};

export default Test;
