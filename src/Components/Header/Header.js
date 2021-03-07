import React, { useContext } from 'react';
import { CategoryContext } from '../../App';


const Header = () => {
    const [category, setCategory] = useContext(CategoryContext)
    return (
        <>
            <h1>This is Header: {category}</h1>
            <button onClick={() =>setCategory('Laptop')}>Laptop</button>
            <button onClick={() =>setCategory('Mobile')}>Mobile</button>
            <button onClick={() =>setCategory('Camera')}>Camera</button>
        </>
    );
};

export default Header;