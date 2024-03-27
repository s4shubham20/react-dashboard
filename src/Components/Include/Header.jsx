import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Header() {
	const [isLoggedOut, setLoggedOut] = useState(false);
	const navigate = useNavigate();

	const logoutHandler = () => {
		if (!isLoggedOut) {
			axios.post('api/logout')
				.then(response => {
					console.log(response);
					localStorage.removeItem('token');
					setLoggedOut(true);
				})
				.catch(error => {
					console.log(error);
				})
		}
	}

	useEffect(() => {
		if (isLoggedOut == true) {
			navigate("/login");
		}
	}, [isLoggedOut]);
    return (
        <>
           {/* start header  */}
		<header>
			<div className="topbar d-flex align-items-center">
				<nav className="navbar navbar-expand gap-3">
					<div className="mobile-toggle-menu"><i className='bx bx-menu'></i>
					</div>
					  <div className="search-bar d-sm-block d-none" data-bs-toggle="modal" data-bs-target="#SearchModal">
					     <Link className="btn d-flex align-items-center"><i className="bx bx-search"></i>Search</Link>
					  </div>
					<div className="user-box dropdown px-3">
						<Link className="d-flex align-items-center nav-link dropdown-toggle gap-3 dropdown-toggle-nocaret" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							<img src="assets/images/avatars/avatar-2.png" className="user-img" alt="user avatar"/>
							<div className="user-info">
								<p className="user-name mb-0">Pauline Seitz</p>
								<p className="designattion mb-0">Web Designer</p>
							</div>
						</Link>
						<ul className="dropdown-menu dropdown-menu-end">
							<li>
								<button onClick={logoutHandler} className="dropdown-item d-flex align-items-center" type="button">
									<i className="bx bx-log-out-circle"></i>
									<span>Logout</span>
								</button>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
		{/* end header  */}
        </>
    )
}