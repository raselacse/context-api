import React from 'react';

const CategoryDetail = (props) => {
    const {name} = props.product;
    return (
        <>
            <h4>Category Details: {name}</h4>
        </>
    );
};

export default CategoryDetail;