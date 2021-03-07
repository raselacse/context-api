import React, { useContext } from 'react';
import {CategoryContext} from '../../App'

const CategoryDetail = () => {
    const category = useContext(CategoryContext)
    return (
        <>
            <h4>Category Details</h4>
            <p>Category: {category}</p>
        </>
    );
};

export default CategoryDetail;