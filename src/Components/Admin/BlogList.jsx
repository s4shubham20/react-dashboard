import React, { useEffect, useState } from 'react'
import Sidebar from '../Include/Sidebar';
import Header from '../Include/Header';
import Footer from '../Include/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function BlogList() {
    const [blogs, setBlog] = useState([]);

    useEffect(() => {
        axios.get('api/blog')
        .then(success => {
            // console.log(success);
            setBlog(success.data.blogs);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    let blogItem = blogs.map((item, i) => {
        return (
            <Blogs blogs={item} key={i} id={i} deleteBlog={() => deleteHandler(item.id)}/>
        )
    });

    const deleteHandler = (e) => {
        console.log(e);
        axios.delete(`api/blog/${e}`)
        .then(success =>{
            let deleteBlog = [...blogs];
            // deleteBlog = deleteBlog.splice(e, 1); 
            deleteBlog = deleteBlog.filter((item, key) => item.id != e);
            setBlog(deleteBlog);
        })
        .catch(error => {
            console.log(error);
        })
    }
  return (
<div className="wrapper">
        <Sidebar/>
        <Header/>
        <div className="page-wrapper">
            <div className="page-content">
                <div className='row'>
                    <div className="col-12">
                        <div className="card radius-10 py-2">
                            <div className="card-body">
                                <div className='card'>
                                    <div className="card-header bg-light d-flex justify-content-between">
                                        <h3 className='mb-0'>
                                            Blog List
                                        </h3>
                                        <Link to={'/blog/create'} className='btn btn-primary'>Add Records</Link>
                                    </div>
                                    <div className="card-body">
                                        <table className='table table-hover table-borderd'>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Title</th>
                                                    <th>Slug</th>
                                                    <th>Category</th>
                                                    <th>Status</th>
                                                    <th>Created_At</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {blogItem}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

function Blogs({blogs, id, deleteBlog}){
    return(
        <tr>
            <td>{id+1}</td>
            <td>{blogs.name}</td>
            <td>{blogs.slug}</td>
            <td>{blogs.category.name}</td>
            <td>{blogs.status}</td>
            <td>{blogs.created_at}</td>
            <td>
                <div className="btn-group">
                    <Link to={`/blog/${blogs.id}/edit`} className='btn btn-info'>Edit</Link>
                    <Link onClick={deleteBlog} className='btn btn-danger'>Delete</Link>
                </div>
            </td>
        </tr>
    )
} 