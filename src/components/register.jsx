import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {

    let [name, setname] = useState("")
    let [number, setnumber] = useState("")
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let [repassword, setrepassword] = useState("")
    let navigate=useNavigate()
    let signupSubmit = (e) => {
        e.preventDefault()
        let data = { name, number, email, password, repassword }
        if (name && number && email && (password == repassword)) {
            axios.post('http://localhost:2000/register',data)
            .then((res)=>{
                alert(res.data.message)
                navigate('/')
               
            })
        } else {
            alert("invalid credentials")

        }

    }

    return (
        <div className="register w-25">
            <h1>Sign Up page</h1>
            <form action="" onSubmit={signupSubmit}>
                <div className="name m-3">
                    <input type="text" className="form-control" placeholder="enter name" value={name} onChange={(e) => setname(e.target.value)} name="name" />
                </div>
                <div className="mobile_Number m-3">
                    <input type="number" className="form-control" placeholder="enter mobile number" value={number} onChange={(e) => setnumber(e.target.value)} name="number " />
                </div>
                <div className="email m-3">
                    <input type="email" className="form-control" placeholder="enter email" value={email} onChange={(e) => setemail(e.target.value)} name="email" />
                </div>
                <div className="password m-3">
                    <input type="password" className="form-control" placeholder="enter password" value={password} onChange={(e) => setpassword(e.target.value)} name="password" />
                </div>
                <div className="comfirm_password m-3">
                    <input type="password" className="form-control" placeholder="re-enter password" value={repassword} onChange={(e) => setrepassword(e.target.value)} name="repassword" />
                </div>
                <div className="sign_up_button m-3" >
                    <button className="btn btn-primary">Sign up</button>
                </div>
                <div className="login_button d-flex m-3">
                    <p>Already a user ?</p>
                    <Link className="btn btn-outline-secondary d-flex px-2" to="/">login</Link>
                </div>

            </form>

        </div>
    );
}

export default Register;