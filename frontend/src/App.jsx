import { useEffect, useState } from 'react';

function App() {

    const [text, setText] = useState(null);

    useEffect(() => {
        async function getData() {
            const response = await fetch("http://localhost:8080");
            const result = await response.json();
            console.log(result);
            setText(result.message);
        }
        getData();
    }, []);

    return (
        <>
            <p>{!text ? "Waiting for text..." : text}</p>
        </>
    )
}

export default App
