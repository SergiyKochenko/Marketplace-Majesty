import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import apiInstance from '../../utils/axios';
import UserData from '../plugin/UserData';
import moment from 'moment'


function Coupon() {
    const [stats, setStats] = useState([])
    const [coupons, setCoupons] = useState([])

    const fetchCouponData = async () => {
        await apiInstance.get(`vendor-coupon-stats/${UserData()?.vendor_id}/`).then((res) => {
            setStats(res.data[0]);
        })

        await apiInstance.get(`vendor-coupon-list/${UserData()?.vendor_id}/`).then((res) => {
            setCoupons(res.data);
        })
    }

    useEffect(() => {
        fetchCouponData()
        console.log(coupons)
    }, [])

    
  return (
    <div className="container-fluid" id="main" >
    <div className="row row-offcanvas row-offcanvas-left h-100">
        <Sidebar />
        <div className="col-md-9 col-lg-10 main mt-4">
            <h4 className="mt-3 mb-4"><i className="bi bi-tag" /> Coupons</h4>
            <button
                type="button"
                className="btn btn-primary mb-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                <i className='fas fa-plus'></i> Create New Coupon
            </button>
            <div className="row mb-3">
                <div className="col-xl-6 col-lg-6 mb-2">
                    <div className="card card-inverse card-success">
                        <div className="card-block bg-success p-3">
                            <div className="rotate">
                                <i className="bi bi-tag fa-5x" />
                            </div>
                            <h6 className="text-uppercase">Total Coupons</h6>
                            <h1 className="display-1">{stats.total_coupons}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 mb-2">
                    <div className="card card-inverse card-danger">
                        <div className="card-block bg-danger p-3">
                            <div className="rotate">
                                <i className="bi bi-check-circle fa-5x" />
                            </div>
                            <h6 className="text-uppercase">Active Coupons</h6>
                            <h1 className="display-1">{stats.active_coupons}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row  container">
                <div className="col-lg-12">
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Code</th>
                                <th scope="col">Type</th>
                                <th scope="col">Discount</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coupons.map((c, index) => (
                                <tr key={index}>
                                    <td>{c.code}</td>
                                    <td>Percentage</td>
                                    <td>{c.discount}%</td>
                                    <td>
                                        {c.active === true
                                            ? 'Active'
                                            : 'In-active'
                                        }
                                    </td>
                                    <td>


                                        <Link to={""} className="btn btn-secondary mb-1 ms-2">
                                            <i className="fas fa-eye" />
                                        </Link>
                                        <Link to={""} className="btn btn-primary mb-1 ms-2">
                                            <i className="fas fa-edit" />
                                        </Link>
                                        <button onClick={""} className="btn btn-danger mb-1 ms-2">
                                            <i className="fas fa-trash" />
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            {coupons < 1 &&
                                <h5 className='mt-4 p-3'>No coupons yet</h5>
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    </div>
    

</div >

  )
}

export default Coupon