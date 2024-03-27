import React, { useEffect, useState } from 'react'
import Sidebar from '../Include/Sidebar';
import Header from '../Include/Header';
import Footer from '../Include/Footer';
import { Link , useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
export default function Blog() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [blog, setBlog] = useState({
        name:'',
        slug:'',
        category_id:1,
        status:0,
        description:'',
        meta_title:'',
        meta_keyword:'',
        meta_description:'',
    });
    const [categories, setCategories] = useState([]);
    const blogHandler = (evt) => {
        evt.preventDefault();
        if(id == undefined){
            axios.post('api/blog', blog)
            .then(success => {
                navigate('/blog');
            })
            .catch(error => {
                console.log(error);
            });
        }else{
            axios.patch(`api/blog/${id}`, blog)
            .then(success => {
                // console.log(success);
                // setBlog(blog);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    useEffect(() => {
        axios.get('api/blog/create')
        .then(success => {
            setCategories(success.data.categories);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        if(id !== undefined){
            axios.get(`api/blog/${id}/edit`)
            .then(success => {
                let data = success.data.blog
                setBlog({...blog, ...data});
            })
            .catch(error => {
                console.log(error);
            });
        }
    }, [id]);
    const inputHandler = (e) => {
        e.persist();
        setBlog({...blog, [e.target.name]:e.target.value});
    }

    const category = categories.map((item, i) => {
        return (<option key={i} value={item.id}>{item.name}</option>)
    });
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
                                           {id == undefined ? "Add ":"Edit "}Blog
                                        </h3>
                                        <Link to={'/blog'} className='btn btn-primary'>View Records</Link>
                                    </div>
                                    <div className="card-body">
                                        <form className='row' onSubmit={blogHandler}>
                                            <div className="col-6 mb-3">
                                                <label htmlFor="title" className='form-label fw-bold'>Title <span className='text-danger'>*</span></label>
                                                <input type="text" id='title' name='name' onChange={inputHandler} className='form-control' placeholder='Enter blog title here!' value={blog.name}/>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label htmlFor="slug" className='form-label fw-bold'>Slug <span className='text-danger'>*</span></label>
                                                <input type="text" id='slug' name='slug' onChange={inputHandler} className='form-control' placeholder='Enter blog slug here!' value={blog.slug}/>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label htmlFor="category_id" className='form-label fw-bold'>Category <span className='text-danger'>*</span></label>
                                                <select id='category_id' name='category_id' value={blog.category_id} onChange={inputHandler} className='form-select'>
                                                    {category}
                                                </select>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label htmlFor="status" className='form-label'>Status <span className='text-danger'>*</span></label>
                                                <div className='d-flex gap-2'>
                                                    <input type="radio" className="btn-check" value="1" checked={blog.status == 1} onChange={inputHandler} name='status' id="btn-check-1" autocomplete="off"/>
                                                    <label className="btn btn-outline-success" htmlFor="btn-check-1">Active</label>
                                                    <input type="radio" className="btn-check"  value="0" checked={blog.status == 0} onChange={inputHandler} name='status' id="btn-check-2" autocomplete="off"/>
                                                    <label className="btn btn-outline-danger" htmlFor="btn-check-2">Inactive</label>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="description" className='form-label fw-bold'>Description</label>
                                                <textarea name="description" id="description" className='form-control' onChange={inputHandler} value={blog.description} placeholder='Enter blog descripiton here!'></textarea>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label htmlFor="meta_title" className='form-label'>Meta Title <span className='text-danger'>*</span></label>
                                                <input type="text" name='meta_title' value={blog.meta_title} onChange={inputHandler} className='form-control' placeholder='Enter meta title here!'/>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label htmlFor="meta_keyword" className='form-label'>Meta Keyword <span className='text-danger'>*</span></label>
                                                <input type="text" name='meta_keyword' value={blog.meta_keyword} onChange={inputHandler} className='form-control' placeholder='Enter meta keyword here!'/>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="meta_keyword" className='form-label'>Meta Description <span className='text-danger'>*</span></label>
                                                <textarea name='meta_description' value={blog.meta_description} onChange={inputHandler} className='form-control' placeholder='Enter meta description here!'></textarea>
                                            </div>
                                            <div className='col-6 d-grid m-auto mb-3'>
                                                <button className={id == undefined ?'btn btn-success':'btn btn-info text-light'}>Submit</button>
                                            </div>
                                        </form>
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
