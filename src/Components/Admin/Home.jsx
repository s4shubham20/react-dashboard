import { Link } from "react-router-dom";
import Header from '../Include/Header';
import Sidebar from '../Include/Sidebar';
import Footer from '../Include/Footer';
export default function Home(){
    return(
        <>
        <div className="wrapper">
        <Sidebar/>
        <Header/>
            <div className="page-wrapper">
                <div className="page-content">
                    <div className="row">
                        <div className="col-12">
                            <div className="card radius-10">
                                <div className="card-header bg-light border-0">
                                    <h4>Admin Dashboard</h4>
                                </div>
                                <div className="card-body">
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