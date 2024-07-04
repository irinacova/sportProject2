import React, { useState } from 'react';

function Counter({children}) {
console.log('Запустился компонент Counter.js');

    const [count, setCount] = useState(0);
    return (
        <>
            <div className='card'>
              {children}
                <button onClick={() => setCount(count => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
                <p></p>
            </div>
        </>
    );
            }

export default Counter;
