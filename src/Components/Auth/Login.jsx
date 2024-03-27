import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState('');
    const [login, setLogin] = useState({
        email:"",
        password:""
    });
    const loginHandler = (e) => {
        e.preventDefault();
		console.log(login);
        axios.post('api/login', login)
        .then(success => {
            const token = localStorage.setItem('token', success.data.access_token);
			setIsLoggedIn(token);
			navigate('/dashboard')
        })
        .catch(error => {
            console.log(error);
        })
    }

    const inputHandler = (evt) => {
        evt.persist();
        setLogin({...login, [evt.target.name]:evt.target.value});
    }
	useEffect(() => {
		const auth = {token: localStorage.getItem('token')};
		if(auth.token){
			navigate('/dashboard');
		}
	}, [isLoggedIn])
  return (
    <div className="wrapper">
		<div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
			<div className="container">
				<div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
					<div className="col mx-auto">
						<div className="card mb-0">
							<div className="card-body">
								<div className="p-4">
									<div className="mb-3 text-center">
										<img src="assets/images/logo-icon.png" width="60" alt="" />
									</div>
									<div className="text-center mb-4">
										<h5 className="">Admin</h5>
										<p className="mb-0">Please log in to your account</p>
									</div>
									<div className="form-body">
										<form className="row g-3" onSubmit={loginHandler}>
											<div className="col-12">
												<label htmlFor="inputEmailAddress" className="form-label">Email</label>
												<input type="email" name='email' onChange={inputHandler} value={login.email} className="form-control" id="inputEmailAddress" placeholder="jhon@example.com" autoComplete='off'/>
											</div>
											<div className="col-12">
												<label htmlFor="inputChoosePassword" className="form-label">Password</label>
												<div className="input-group" id="show_hide_password">
													<input type="password" name='password' onChange={inputHandler} value={login.password} className="form-control border-end-0" id="inputChoosePassword" placeholder="Enter Password"  autoComplete='off'/>
                                                    <button type='button' className="input-group-text bg-transparent"><i className="bx bx-hide"></i></button>
												</div>
											</div>
											<div className="col-12">
												<div className="d-grid">
													<button type="submit" className="btn btn-primary">Sign in</button>
												</div>
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
	</div>
  )
}
