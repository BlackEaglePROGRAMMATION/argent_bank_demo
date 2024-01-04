import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { addProfil } from "../../redux";

import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import './style.css'

function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const profile = useSelector((state) => state.user);
    
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const connection = async (e) => {
        e.preventDefault();
        
        // const req = await fetch(`http://localhost:3001/api/v1/user/login`, {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //         email: email,
        //         password: password
        //     })
        // });

        // const res = await req.json();
        // const token = res.body.token;
        const token = 'TOKEN';

        if (token) {
            const newToken = {
                userName: 'Visitor',
                token: token
            }
            
            dispatch(addProfil(newToken))
            navigate('/profile');
        }
    }

    return (
        <div className='sign-in'>
            <form onSubmit={(e) => connection(e)}>
                <h2>
                    <i className='fas fa-circle-user'></i>
                    Sign In
                </h2>

                <div className="champ">
                    <label>Email</label>
                    <input 
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="champ">
                    <label>Password</label>
                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? 'text' : 'password'} 
                    />
                    <i 
                        className={`fas fa-eye${!showPassword ? '-slash' : ''}`}
                        onClick={() => setShowPassword((value) => !value)}
                    ></i>
                </div>

                <div className="remember-input">
                    <label htmlFor="remember-me">Remember me</label>
                    <input type="checkbox" id="remember-me" />
                </div>

                <button type='submit'>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn;