import React from 'react'

function Checkout() {
  return (
<main>
    <main className="mb-4 mt-4">
        <div className="container">
            <section className="">
                <div className="row gx-lg-5">
                    <div className="col-lg-8 mb-4 mb-md-0">
                        <section className="">
                            <div className="alert alert-warning">
                                <strong>Review Your Shipping &amp; Order Details </strong>
                            </div>
                            <form>
                                <h5 className="mb-4 mt-4">Shipping address</h5>
                                <div className="row mb-4">

                                    <div className="col-lg-12">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="form6Example2">Full Name</label>
                                            <input
                                                type="text"
                                                readOnly
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mt-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="form6Example2">Email</label>
                                            <input
                                                type="text"
                                                readOnly
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mt-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="form6Example2">Mobile</label>
                                            <input
                                                type="text"
                                                readOnly
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="form6Example2">Address</label>
                                            <input
                                                type="text"
                                                readOnly
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="form6Example2">City</label>
                                            <input
                                                type="text"
                                                readOnly
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="form6Example2">State</label>
                                            <input
                                                type="text"
                                                readOnly
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="form6Example2">Country</label>
                                            <input
                                                type="text"
                                                readOnly
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>


                                <h5 className="mb-4 mt-4">Billing address</h5>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" defaultValue="" id="form6Example8" defaultChecked="" />
                                    <label className="form-check-label" htmlFor="form6Example8">
                                        Same as shipping address
                                    </label>
                                </div>
                            </form>
                        </section>
                        {/* Section: Biling details */}
                    </div>
                    <div className="col-lg-4 mb-4 mb-md-0">
                        {/* Section: Summary */}
                        <section className="shadow-4 p-4 rounded-5 mb-4">
                            <h5 className="mb-3">Order Summary</h5>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Subtotal </span>
                                <span>$10.00</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Shipping </span>
                                <span>$10.00</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Tax </span>
                                <span>$10.00</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Servive Fee </span>
                                <span>$10.00</span>
                            </div>
                            <hr className="my-4" />
                            <div className="d-flex justify-content-between fw-bold mb-5">
                                <span>Total </span>
                                <span>$10.00</span>
                            </div>

                            <div className="shadow p-3 d-flex mt-4 mb-4">
                                <input readOnly value={""} name="couponCode" type="text" className='form-control' style={{ border: "dashed 1px gray" }} placeholder='Enter Coupon Code' id="" />
                                <button className='btn btn-success ms-1'><i className='fas fa-check-circle'></i></button>
                            </div>

                            
                                <button type="submit" className="btn btn-primary btn-rounded w-100 mt-2" style={{ backgroundColor: "#635BFF" }}>Pay Now (Stripe) <i className='fas fa-credit-card'></i></button>
                           
                        </section>
                    </div>
                </div>
            </section>
        </div>
    </main>
</main>
  )
}

export default Checkout