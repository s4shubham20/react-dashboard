import { Link } from "react-router-dom"

export default function Sidebar() {
    return(
        <>
			<div className="sidebar-wrapper" data-simplebar="true">
				<div className="sidebar-header">
					<div>
						<img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon"/>
					</div>
					<div>
						<h4 className="logo-text">Syndron</h4>
					</div>
					<div className="toggle-icon ms-auto"><i className='bx bx-arrow-back'></i>
					</div>
				</div>
				<ul className="metismenu" id="menu">
					<li>
						<Link to="/dashboard">
							<div className="parent-icon"><i className='bx bx-home-alt'></i>
							</div>
							<div className="menu-title">Dashboard</div>
						</Link>
					</li>
					<li>
						<Link to="/category">
							<div className="parent-icon"><i className='bx bx-bookmark-heart'></i>
							</div>
							<div className="menu-title">Category</div>
						</Link>
					</li>
					<li>
						<Link to="/blog">
							<div className="parent-icon"><i className='bx bx-bookmark-heart'></i>
							</div>
							<div className="menu-title">Blog</div>
						</Link>
					</li>
				</ul>
			</div>
        </>
    )
}