import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Login=({startLogin})=>{
    const [ loginid, setloginid ] = useState('')
    const [ password, setPassword ] = useState('')

    // onSubmit event handler of this form
    const handleLogin = (event) => {
        // Preventing default submission of the form to the action attribute URL
        event.preventDefault()

        const credentials = {
        loginid,password
        }

        startLogin(credentials)

        setloginid('')
        setPassword('')
    }
    return(
        <div>
            <form onSubmit={handleLogin} id='loginform'>
            <div className="form-group row">
                    <label for="loginid" className="offset-md-2 col-md-2 col-form-label">Login Id</label>
                    <div className="col-md-6">
                        <input className="form-control" type="text" name='loginid' id='loginid' placeholder='Login Id' value={loginid} onChange={event => setloginid(event.target.value)} required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor='password' className="offset-md-2 col-md-2 col-form-label">Password</label>
                    <div className="col-md-6">
                        <input className="form-control" type="password" name='password' id='password' placeholder='Password' value={password} onChange={event => setPassword(event.target.value)} required/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="offset-md-4 col-md-1 col-lg-2">
                        <button className="btn btn-secondary form-control">Cancel</button>
                    </div>
                    <div className="col-md-1 col-lg-2">
                        <button className="btn btn-primary form-control">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Login