import { Link } from "react-router-dom"

export default function Sidebar() {
    return(
        <>
        {/* sidebar wrapper  */}
		<div className="sidebar-wrapper" data-simplebar="true">
			<div className="sidebar-header">
				<div>
					<img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon"/>
				</div>
				<div>
					<h4 className="logo-text">Syndron</h4>
				</div>
				<div className="toggle-icon ms-auto"><i class='bx bx-arrow-back'></i>
				</div>
			 </div>
			{/* navigation */}
			<ul className="metismenu" id="menu">
				<li>
					<Link to="/">
						<div className="parent-icon"><i class='bx bx-home-alt'></i>
						</div>
						<div className="menu-title">Dashboard</div>
					</Link>
				</li>
				<li>
                    <Link to="/category">
						<div className="parent-icon"><i class='bx bx-home-alt'></i>
						</div>
						<div className="menu-title">Category</div>
					</Link>
				</li>
			</ul>
			{/* end navigation */}
		</div>
		{/* end sidebar wrapper */}
        </>
    )
}