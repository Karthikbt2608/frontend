import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let handlesubmit = () => {


    }

    return (
        <div className="login">
            <h1>Login page</h1>
            <div className="login_form w-25 " >
                <form action="" onSubmit={handlesubmit}>
                    <div className="email">
                        <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" placeholder="enter email" />
                    </div>
                    <div className="pwd1">
                        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" placeholder="enter password" />
                    </div>
                    <div className="login_button">
                        <button className="btn  btn-primary">Login</button>
                    </div>
                    <div className="signUp_button d-flex align-items-center">
                        <p>Are you a new user?</p>
                        <Link className="btn btn-outline-primary" to="/register">Signn up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;