import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props: { message: string }) => {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount(count => count + 1);
    }, [count]);

    return (
        <div>
            <h1>{props.message}</h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

ReactDOM.render(
    <App message="pnpm + ESbuild + React + Typescript" />,
    document.getElementById('root')
)
