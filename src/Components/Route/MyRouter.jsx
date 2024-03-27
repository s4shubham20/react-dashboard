import React, {useEffect, useState} from 'react'
import {Routes, Route, useNavigate, useLocation} from "react-router-dom";
import Home from '../Admin/Home';
import Category from '../Admin/Category';
import CategoryList from '../Admin/CategoryList';
import Blog from '../Admin/Blog';
import BlogList from '../Admin/BlogList';
import Login from '../Auth/Login';
import ProtectedRoute from './ProtectedRoute';
export default function MyRouter() {
    return(
        <Routes>
            <Route element={<ProtectedRoute />}>
                <Route element={<Home/>} path="/dashboard" exact/>
                <Route element={<CategoryList/>} path="/category"/>
                <Route path='/blog' element={<BlogList/>}/>
                <Route path='/blog/create' element={<Blog/>}/>
                <Route path='/blog/:id/edit' element={<Blog/>}/>
                <Route path="/category/create" element={<Category/>}/>
                <Route path="/category/:id/edit" element={<Category/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}
