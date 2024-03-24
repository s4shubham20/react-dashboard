import Header from '../Include/Header';
import Sidebar from '../Include/Sidebar';
import Footer from '../Include/Footer';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function CategoryList(){
    const [categories , setCategories] = useState([]);
    const [isLoding , setIsLoding] = useState(true);
    useEffect(() => {
        axios.get('http://localhost/laravel/react-with-laravel/public/index.php/api/category')
        .then(success => {
            setCategories(success.data.categories);
            console.log(categories);
            setIsLoding(false);
        })
        .catch(error => {
            console.log(error);
        });
    }, [])
    const deleteCategory = (evt) => {
        setIsLoding(true);
        axios.delete(`http://localhost/laravel/react-with-laravel/public/index.php/api/category/${evt}`)
        .then(success => {
            // console.log(success);
            let oldData = [...categories];
            let deleteData = oldData.filter((item) => item.id != evt); 
            // oldData.splice(evt, 1);
            setCategories(deleteData);
            setIsLoding(false);
        })
        .catch(error => {
            console.log(error);
        });
    } 
    const category = categories.map((value, i) => {
            return(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{value.name}</td>
                    <td>{value.slug}</td>
                    <td>
                        <div className='btn-group'>
                            <Link className='btn btn-info' to={`/category/${value.id}/edit`}>Edit</Link>
                            <Link onClick={() => deleteCategory(value.id)} className='btn btn-danger'>Delete</Link>
                        </div>
                    </td>
                </tr>
            )
        });
    return (
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
                                                Cateories
                                            </h3>
                                            <Link to={'/category/create'} className='btn btn-primary'><i class="text-primary" data-feather="eye"></i>Add Records</Link>
                                        </div>
                                        <div className="card-body">
                                        {isLoding ? <Loader/>:
                                            <table className="table table-hover table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Category Name</th>
                                                        <th>Category Slug</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {category}
                                                </tbody>
                                            </table>
                                        }
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

function Loader(){
    return(
    <div className='isloader'>
        <div className="is-loader-inner"></div>
    </div>
    )
}