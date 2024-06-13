import React from 'react'

const Login = () => {
  return (
    <div> <h1><center><b>LOGIN</b></center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 cl-sm-12 col-md-12 col-xl-12 col-xxl-12">
                <div className="row g-4">
                <div className="col col-12 cl-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">EMAIL:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 cl-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">PASSWORD:</label>
                    <input type="password" name="password" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <center><button className="btn btn-primary">LOGIN</button></center>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login