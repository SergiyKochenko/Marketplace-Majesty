import React, { useEffect, useState } from "react"
import { register as registerUser } from '../../utils/auth';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';

function Register() { 

    const [fullname, setFullname] = useState('')
    const [Email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setIsLoading(true)

        const { error } = await registerUser(fullname, Email, mobile, password, password2);
        if (error) {
            alert(JSON.stringify(error))
        } else {
            navigate('/')
        }
    }

    return (
        <>
            <div>Register</div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Full Name'
                    onChange={(e) => setFullname(e.target.value)}
                />
                <br/><br/>
                <input
                    type='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br/><br/>
                <input
                    type='number'
                    placeholder='Mobile Number'
                    onChange={(e) => setMobile(e.target.value)}
                />
                <br/><br/>
                <input
                    type='password'
                    placeholder='Enter Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/><br/>
                <input
                    type='password2'
                    placeholder='Confirm Password'
                    onChange={(e) => setPassword2(e.target.value)}
                />
                <br/><br/>
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register;
