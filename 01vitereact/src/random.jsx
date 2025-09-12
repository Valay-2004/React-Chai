import { useState, useEffect } from "react";

function Counter(){
    const [count, setCount] = useState(10);

    useEffect(() => {
        if(count >= 0){
            const timer = setTimeout(() => setCount(count - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [count]);

    return (
        <div className="output">
            {count >= 0 ? `The bomb goes BURR in ${count}`: "💥 BOOM!"}
        </div>
    );
}

export default Counter;
