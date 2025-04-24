import { useState, useEffect } from 'react'
import apiInstance from '../../utils/axios'
import UserData from '../plugin/UserData'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function Wishlist() {
    const [wishlist, setWishlist] = useState([])

    const userData = UserData()

    const fetchWishlist = async () => {
        await apiInstance.get(`customer/wishlist/${userData?.user_id}/`).then((res) => {
            setWishlist(res.data);
        })
    }

    useEffect(() => {
        fetchWishlist()
    }, [])

    const addToWishlist = async (productId, userId) => {
        try {
            const formdata = new FormData()
        formdata.append("product_id", productId)
        formdata.append("user_id", userId)
        
        const response = await apiInstance.post(`customer/wishlist/${userId}/`, formdata)
        console.log(response.data);
        fetchWishlist()

        Swal.fire({
            icon: "success",
            title: response.data.message,
        })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="mt-5">
            <div className="container">
                <section className="">
                    <div className="row">
                        <Sidebar Here />

                        <div className="col-lg-9 mt-1">
                            <section className="">
                                <main className="mb-5" style={{}}>
                                    <div className="container">
                                        <section className="">
                                            <div className="row">
                                                <h3 className="mb-3">
                                                    <i className="fas fa-heart text-danger" /> Wishlist
                                                </h3>

                                                {wishlist.map((w, index) => (
                                                    <div key={index} className="col-lg-4 col-md-12 mb-4">
                                                        <div className="card">
                                                            <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                                                                <Link to={`/detail/${w.product?.slug}/`}>
                                                                    <img
                                                                        src={w.product?.image}
                                                                        className="w-100"
                                                                        style={{ width: "100%", height: "400px", objectFit: "cover" }}
                                                                        alt="Product"
                                                                    />
                                                                </Link>

                                                                <a href="#">
                                                                    <div className="mask">
                                                                        <div className="d-flex justify-content-start align-items-end h-100">
                                                                            <h5>
                                                                                <span className="badge badge-primary ms-2">
                                                                                    New
                                                                                </span>
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="hover-overlay">
                                                                        <div
                                                                            className="mask"
                                                                            style={{
                                                                                backgroundColor: "rgba(251, 251, 251, 0.15)"
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="card-body">
                                                                <a href="#" className="text-reset">
                                                                    <h6 className="card-title mb-3 ">{w.product?.title}</h6>
                                                                </a>
                                                                <a href="#" className="text-reset">
                                                                <p>{w.product?.category?.title}</p>
                                                                </a>
                                                                <div className='d-flex'>
                                                                <h6 className="mb-3">${w.product?.price}</h6>
                                                                <h6 className="mb-3 text-muted ms-2"><strike>${w.product?.old_price}</strike></h6>
                                                                </div>

                                                                <button 
                                                                    type="button" 
                                                                    className="btn btn-danger px-3 me-1 mb-1"
                                                                    onClick={() => addToWishlist(w.product.id, userData?.user_id)}
                                                                >
                                                                    <i className="fas fa-heart" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}

                                                {/* Show This if there are no item in wishlist */}
                                                {wishlist.length === 0 && <h6 className='container p-4'>Your wishlist is Empty </h6>}

                                            </div>
                                        </section>
                                    </div>
                                </main>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Wishlist
