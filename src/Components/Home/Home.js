import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const [category] = useContext(CategoryContext)
    return (
        <>
           <div style={{border:"1px solid gray"}}>
                <h1>This is Home</h1>
                <Categories></Categories>
           </div>
        </>
    );
};

export default Home;