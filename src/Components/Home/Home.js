import React from 'react';
import Category from '../Category/Category';

const Home = props => {
    const {count} = props;
    return (
        <>
            <h1>This is Home: {count}</h1>
            <Category count={count}></Category>
        </>
    );
};

export default Home;