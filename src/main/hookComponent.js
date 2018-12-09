import React, { useState } from 'react';
let showFruit = true;


const HookCom = ({visible}) => {
    const [age, setAge] = useState(42);
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
    if(showFruit) {
        const [fruit, setFruit] = useState('banana');
        showFruit = false;
    }
    return (
        <div className='useState'>
            <div>Age: {age} </div>
            <button 
            onClick={() => {
                    setAge(age * 2); 
                    visible = false
                }}
            >
                setAge</button>
        </div>
    )
}

export default HookCom;