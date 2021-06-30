import React, { useState } from 'react'

function LoginForm({ Login, error }) {
const [details, setDetails] = useState({name: "", email: "", password: ""});

const submitHandler = e => {
    e.preventDefault();

    Login(details);
}
    return (
        /*onsubmit is to execute yung javascript if yung Form ay nasubmit,
        form-inner pangalan ng class ng div na nag cocontain ng pinaka login form,
        sa input ng email naman ay kinukuha yung exact detail na hinihingi which is yung email with @
        sa input naman ng password ay kinukuha naman anong iinput for user password
        Yung isa namang input ay ayun yung login button sa login form*/
        <form onSubmit={submitHandler}> 
            <div className="form-inner">
                <h2>Login</h2>
                
                {(error !== "") ? ( <div className="error">{error}</div> ) : ""}
               
                 <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                
                <input type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}
export default LoginForm
