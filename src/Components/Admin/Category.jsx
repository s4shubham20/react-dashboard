import React, { useEffect, useState } from 'react'
import Header from '../Include/Header';
import Sidebar from '../Include/Sidebar';
import Footer from '../Include/Footer';
import { Link , useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
export default function Category() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [category , setCategory] = useState({
        name:'',
        slug:'',
        status:0,
        meta_title:'',
        meta_keyword:'',
        meta_description:''
    });
    const categoryHandler = (evt) => {
        evt.preventDefault();
        if(id == undefined){
            axios.post('api/category',category)
            .then(success => {
                setCategory({});
                navigate('/category');
            })
            .catch(error => {
                console.log(error);
            })
        }else{
            axios.patch(`api/category/${id}`, category)
            .then(response => {
                console.log(response);
            })
            .then(error => {
                console.log(error);
            })
        }
    }
    
    useEffect(() => {
        if(id != undefined){
            axios.get(`api/category/${id}/edit`)
            .then(response => {
                setCategory(response.data.category);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }, [id]);

    const inputHandler = (e) => {
        e.persist();
        setCategory({...category, [e.target.name]:e.target.value});
    }
  return (
   <>
    <div className="wrapper">
        <Sidebar/>
        <Header/>
            <div className="page-wrapper">
                <div className="page-content">
                    <div className="row">
                        <div className="col-12">
                            <div className="card radius-10 py-2">
                                <div className="card-body">
                                    <div className='card'>
                                        <div className="card-header bg-light d-flex justify-content-between">
                                            <h3 className='mb-0'>
                                                {id== undefined ? 'Add':'Edit'} Cateories 
                                            </h3>
                                            <Link to={'/category'} className='btn btn-primary'><i className="text-primary" data-feather="eye"></i>View Records</Link>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={categoryHandler} className='row'>
                                                <div className="col-6 mb-3">
                                                    <label htmlFor="name" className='form-label'>Category <span className='text-danger'>*</span></label>
                                                    <input type="text" name='name' value={category.name} onChange={inputHandler} id='name' className='form-control' placeholder='Please enter category name here!'/>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <label htmlFor="slug" className='form-label'>Category Slug <span className='text-danger'>*</span></label>
                                                    <input type="text" name='slug' value={category.slug} onChange={inputHandler} id='slug' className='form-control' placeholder='Please enter category slug here!'/>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label htmlFor="status" className='form-label'>Status <span className='text-danger'>*</span></label>
                                                    <div className='d-flex gap-2'>
                                                        <input type="radio" className="btn-check" value="1" checked={category.status == 1} onChange={inputHandler} name='status' id="btn-check-1" autocomplete="off"/>
                                                        <label className="btn btn-outline-success" htmlFor="btn-check-1">Active</label>
                                                        <input type="radio" className="btn-check"  value="0" checked={category.status == 0} onChange={inputHandler} name='status' id="btn-check-2" autocomplete="off"/>
                                                        <label className="btn btn-outline-danger" htmlFor="btn-check-2">Inactive</label>
                                                    </div>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <label htmlFor="meta_title" className='form-label'>Meta Title <span className='text-danger'>*</span></label>
                                                    <input type="text" name='meta_title' value={category.meta_title} onChange={inputHandler} className='form-control' placeholder='Enter meta title here!'/>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <label htmlFor="meta_keyword" className='form-label'>Meta Title <span className='text-danger'>*</span></label>
                                                    <input type="text" name='meta_keyword' value={category.meta_keyword} onChange={inputHandler} className='form-control' placeholder='Enter meta keyword here!'/>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label htmlFor="meta_keyword" className='form-label'>Meta Title <span className='text-danger'>*</span></label>
                                                    <textarea name='meta_description' value={category.meta_description} onChange={inputHandler} className='form-control' placeholder='Enter meta description here!'></textarea>
                                                </div>
                                                <div className='col-6 d-grid m-auto mb-3'>
                                                    <button className={id == undefined ?`btn btn-success`:'btn btn-info'}>Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
   </>
  )
}
