import React from 'react';

const CategoryDetail = (props) => {
    const {count} = props;
    return (
        <>
            <h4>This is Category Detail has: {count}</h4>
        </>
    );
};

export default CategoryDetail;