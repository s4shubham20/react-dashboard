import React from 'react'
import { Link } from 'react-router-dom'

export default function Modal() {
  return (
    <>
        {/* <!-- search modal --> */}
    <div className="modal" id="SearchModal" tabIndex="-1">
		<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down">
		  <div className="modal-content">
			<div className="modal-header gap-2">
			  <div className="position-relative popup-search w-100">
				<input className="form-control form-control-lg ps-5 border border-3 border-primary" type="search" placeholder="Search"/>
				<span className="position-absolute top-50 search-show ms-3 translate-middle-y start-0 top-50 fs-4"><i className='bx bx-search'></i></span>
			  </div>
			  <button type="button" className="btn-close d-md-none" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div className="modal-body">
				<div className="search-list">
				   <p className="mb-1">Html Templates</p>
				   <div className="list-group">
					  <Link className="list-group-item list-group-item-action active align-items-center d-flex gap-2 py-1"><i className='bx bxl-angular fs-4'></i>Best Html Templates</Link>
					  <Link className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-vuejs fs-4'></i>Html5 Templates</Link>
					  <Link className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-magento fs-4'></i>Responsive Html5 Templates</Link>
					  <Link className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"><i className='bx bxl-shopify fs-4'></i>eCommerce Html Templates</Link>
				   </div>
				</div>
			</div>
		  </div>
		</div>
	  </div>
    {/* <!-- end search modal --> */}
    </>
  )
}