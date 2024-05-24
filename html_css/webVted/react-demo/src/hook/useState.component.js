import { useState } from "react"
export function UseStateComponent() {
    const [startCount] = useState(1)
    const [count, setCount] = useState(() => startCount + 1);
    const handleIncreaseCount = () => {
        // setState without callback
        // setCount(count + 1)
        // setState with callback
        
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);


    }
    return (
        <>
            <h1>{count}</h1>
            <button button onClick={handleIncreaseCount}>Increase</button>
        </>
    )
}