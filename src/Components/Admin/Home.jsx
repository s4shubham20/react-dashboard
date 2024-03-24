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
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                        <div className="col">
                            <div className="card radius-10">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-secondary">Revenue</p>
                                            <h4 className="my-1">$4805</h4>
                                            <p className="mb-0 font-13 text-success"><i class='bx bxs-up-arrow align-middle'></i>$34 Since last week</p>
                                        </div>
                                        <div className="widgets-icons bg-light-success text-success ms-auto"><i class='bx bxs-wallet'></i>
                                        </div>
                                    </div>
                                    <div id="chart1"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <Link to="/">Helo</Link>
                            <div className="card radius-10">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-secondary">Total Customers</p>
                                            <h4 className="my-1">8.4K</h4>
                                            <p className="mb-0 font-13 text-success"><i class='bx bxs-up-arrow align-middle'></i>14% Since last week</p>
                                        </div>
                                        <div className="widgets-icons bg-light-warning text-warning ms-auto"><i class='bx bxs-group'></i>
                                        </div>
                                    </div>
                                    <div id="chart2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card radius-10">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-secondary">Store Visitors</p>
                                            <h4 className="my-1">59K</h4>
                                            <p className="mb-0 font-13 text-danger"><i class='bx bxs-down-arrow align-middle'></i>12.4% Since last week</p>
                                        </div>
                                        <div className="widgets-icons bg-light-danger text-danger ms-auto"><i class='bx bxs-binoculars'></i>
                                        </div>
                                    </div>
                                    <div id="chart3"></div>
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