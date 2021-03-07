import React from 'react';

const Home = props => {
    const {count, setCount} = props;
    return (
        <>
            <h1>This is Home: {count}</h1>
            <button onClick={() =>setCount(count + 1)}>Increment</button>
        </>
    );
};

export default Home;