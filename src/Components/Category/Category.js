import React from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Category = (props) => {
    const {count} = props;
    return (
        <>
            <h2>This is Category</h2>
            <CategoryDetail count={count}></CategoryDetail>
        </>
    );
};

export default Category;