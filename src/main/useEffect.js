import React, { useState, useEffect } from 'react';
let a = 0;

const Content = () => <div>this is a content component</div>

const HookCom = () => {
    // 状态和状态修改器组合，更小的细粒度控制
    const [count, setCount] = useState(0);
    useEffect(() => {
        // 组件redenered时会触发: DidMount and DidUpdate。
        console.log(a++);
        document.title = `click ${count} times`;
    })
    useEffect((params) => {
        console.log('params', params);
        const timer = setTimeout(() => {console.log('执行异步操作')}, 0)
        return () => {
            console.log('通常会在副作用中做一些操作，如注册订阅，开启定时器，此处的返回值，可用于取消订阅，清除定时器，避免内存泄漏。');
            clearTimeout(timer);
        }
    })

    return (
        <div className='useState'>
            <div>click {count} times</div>
            <button onClick={() => setCount(count)}>Click</button>
        </div>
    )
}

export default HookCom;