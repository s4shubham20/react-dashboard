import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from '../Admin/Home';
import Category from '../Admin/Category';
import CategoryList from '../Admin/CategoryList';
export default function MyRouter() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/category" element={<CategoryList/>}/>
            <Route path="/category/create" element={<Category/>}/>
            <Route path="/category/:id/edit" element={<Category/>}/>
        </Routes>
    )
}
