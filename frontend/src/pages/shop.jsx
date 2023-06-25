import React, { useEffect, useState } from 'react'
import "../style/shop.css"
import {useSelector, useDispatch} from "react-redux"; 
import { getProductsFun } from '../redux/app/products/action';
import ShopItems from '../components/shopItems';
import { motion } from 'framer-motion'

const Shop = () => {
    const [filter, setFilter] = useState("");
    const dispatch = useDispatch();
    const data = useSelector((store) => store.productReducer);
    const {isLoading, isError, products} = data;

    // get function-
    useEffect(()=> {
        dispatch(getProductsFun(filter))
    }, [filter])


    return (
            <motion.div id='shop'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <h1>Order {filter || "something"}</h1>
                <div id="filter-sort-section">
                    <select onChange={(e)=>setFilter(e.target.value)}>
                        <option value="">All Categories</option>
                        <option value="GK">General Knowledge</option>
                        <option value="BS">Business Study</option>
                        <option value="AD">Arts & Design</option>
                        <option value="Myth">Mythology</option>
                        <option value="Horo">Horoscope</option>
                    </select>
                </div>
                <ShopItems filter={filter} products={products} />
            </motion.div>
    )
}

export default Shop
