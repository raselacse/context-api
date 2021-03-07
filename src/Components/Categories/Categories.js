import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [{id:1, name:'Lenovo', category:'laptop'},{id:2, name:'Dell', category:'laptop'},{id:3, name:'Asus', category:'laptop'},
                    {id:4, name:'Dell', category:'mobile'},{id:5, name:'Lenovo', category:'mobile'},{id:6, name:'Asus', category:'mobile'},
                    {id:7, name:'Asus', category:'camera'},{id:8, name:'Dell', category:'camera'},{id:9, name:'Lenovo', category:'camera'}]

const Category = () => {
    const [category] = useContext(CategoryContext)
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const matchProducts = allProducts.filter(pd => pd.category === category)
        setProducts(matchProducts)
    },[category])
    return (
        <>
            <h2>This is Categories: {category}</h2>
            {
                products.map(pd => <CategoryDetail product={pd} key={pd.id}></CategoryDetail>)
            }
        </>
    );
};

export default Category;