import { useEffect, useState } from 'react';
import { login } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true
})
const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/');
        }
    }, []);

    const resetForm = () => {
        setUsername('');
        setPassword('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Validation: check for empty fields
        if (username.trim() === "" || password.trim() === "") {
            Toast.fire({ icon: "error", title: "Please fill in all fields" });
            setIsLoading(false);
            return;
        }
        const { error } = await login(username, password);
        if (error) {
            Toast.fire({ icon: "error", title: error });
        } else {
            navigate('/');
            resetForm();
        }
        setIsLoading(false);
    };
    return (
        <section>
            <main className="" style={{ marginBottom: 100, marginTop: 50 }}>
                <div className="container">
                    {/* Section: Login form */}
                    <section className="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-5 col-md-8">
                                <div className="card rounded-5">
                                    <div className="card-body p-4">
                                        <h3 className="text-center">Login</h3>
                                        <br />

                                        <div className="tab-content">
                                            <div
                                                className="tab-pane fade show active"
                                                id="pills-login"
                                                role="tabpanel"
                                                aria-labelledby="tab-login"
                                            >
                                                <form onSubmit={handleLogin}>
                                                    {/* Email input */}
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="Full Name">
                                                            Email Address
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="username"
                                                            name="username"
                                                            value={username}
                                                            onChange={(e) => setUsername(e.target.value)}
                                                            className="form-control"

                                                        />
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="loginPassword">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="password"
                                                            name="password"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            className="form-control"
                                                        />
                                                    </div>

                                                    <button className='btn btn-primary w-100' type="submit" disabled={isLoading}>
                                                        {isLoading ? (
                                                            <>
                                                                <span className="mr-2 ">Processing...</span>
                                                                <i className="fas fa-spinner fa-spin" />
                                                            </>
                                                        ) : (
                                                            <>
                                                                <span className="mr-2">Sign In </span>
                                                                <i className="fas fa-sign-in-alt" />
                                                            </>
                                                        )}
                                                    </button>

                                                    <div className="text-center">
                                                        <p className='mt-4'>
                                                            Don&apos;t have an account? <Link to="/register">Register</Link>
                                                        </p>
                                                        <p className='mt-0'>
                                                             <Link to="/forgot-password" className='text-danger'>Forgot Password?</Link>
                                                        </p>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </section>
    );
};

export default Login;