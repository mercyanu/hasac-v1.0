import React from 'react'
import './signin.style.scss';

const SignIn = () => {
    return (
        <div className="login-box">

            <div className="card">
                <div className="card-body login-card-body">
                    <div className="login-logo login-logo-text">HASAC</div>
                    <p className="login-box-msg">Please login to your dashboard </p>
                    <form action="#" method="">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Username" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>

                        <div className="row">
                            <div className="col-12">
                                    <label className="forgot-text float-right">
                                        Forgot password!
                                </label>
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary btn-block signin-button">Sign In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default SignIn;