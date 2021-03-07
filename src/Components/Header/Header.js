import React, { useContext } from 'react';
import { CategoryContext } from '../../App';


const Header = () => {
    const [category, setCategory] = useContext(CategoryContext)
    return (
        <>
            <h1>This is Header</h1>
            <button onClick={() =>setCategory('laptop')}>Laptop</button>
            <button onClick={() =>setCategory('mobile')}>Mobile</button>
            <button onClick={() =>setCategory('camera')}>Camera</button>
        </>
    );
};

export default Header;