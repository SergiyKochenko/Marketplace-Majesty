import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import apiInstance from '../../utils/axios'
import UserData from '../plugin/UserData'
import { Link, useParams } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import moment from 'moment'



function OrderDetail() {
  const [order, setOrder] = useState({})
  const [orderItems, setOrderItems] = useState([])

  const userData = UserData()
  const param = useParams()
  console.log(param);

  useEffect(() => {
    apiInstance.get(`customer/order/${userData?.user_id}/${param.order_oid}`).then((res) => {
      setOrder(res.data);
      setOrderItems(res.data.orderitem);
    })
  }, [])

  console.log(order);

  return (
    <main className="mt-5">
    <div className="container">
      <section className="">
        <div className="row">
  
  
          <Sidebar />
          
          <div className="col-lg-9 mt-1">
            <main className="mb-5">

              <div className="container px-4">

                <section className="mb-5">
                  <h3 className="mb-3">
                    {" "}
                    <i className="fas fa-shopping-cart text-primary" /> #{order.oid}{" "}
                  </h3>
                  <div className="row gx-xl-5">
                    <div className="col-lg-3 mb-4 mb-lg-0">
                      <div
                        className="rounded shadow"
                        style={{ backgroundColor: "#B2DFDB" }}
                      >
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div className="">
                              <p className="mb-1">Total</p>
                              <h2 className="mb-0">
                                ${order.total}
                                <span
                                  className=""
                                  style={{ fontSize: "0.875rem" }}
                                ></span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 mb-4 mb-lg-0">
                      <div
                        className="rounded shadow"
                        style={{ backgroundColor: "#D1C4E9" }}
                      >
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div className="">
                              <p className="mb-1">Payment Status</p>
                              <h2 className="mb-0">
                                {order?.payment_status?.toUpperCase()}
                                <span
                                  className=""
                                  style={{ fontSize: "0.875rem" }}
                                ></span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 mb-4 mb-lg-0">
                      <div
                        className="rounded shadow"
                        style={{ backgroundColor: "#BBDEFB" }}
                      >
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div className="">
                              <p className="mb-1">Order Status</p>
                              <h2 className="mb-0">
                              {order?.order_status?.toUpperCase()}
                                <span
                                  className=""
                                  style={{ fontSize: "0.875rem" }}
                                ></span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 mb-4 mb-lg-0">
                      <div
                        className="rounded shadow"
                        style={{ backgroundColor: "#bbfbeb" }}
                      >
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div className="">
                              <p className="mb-1">Shipping Amount</p>
                              <h2 className="mb-0">
                                ${order.shipping_amount}
                                <span
                                  className=""
                                  style={{ fontSize: "0.875rem" }}
                                ></span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0 mt-5">
                      <div
                        className="rounded shadow"
                        style={{ backgroundColor: "#bbf7fb" }}
                      >
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div className="">
                              <p className="mb-1">Tax Fee</p>
                              <h2 className="mb-0">
                                ${order.tax_fee}
                                <span
                                  className=""
                                  style={{ fontSize: "0.875rem" }}
                                ></span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0 mt-5">
                      <div
                        className="rounded shadow"
                        style={{ backgroundColor: "#eebbfb" }}
                      >
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div className="">
                              <p className="mb-1">Service Fee</p>
                              <h2 className="mb-0">
                                ${order.service_fee}
                                <span
                                  className=""
                                  style={{ fontSize: "0.875rem" }}
                                ></span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0 mt-5">
                      <div
                        className="rounded shadow"
                        style={{ backgroundColor: "#bbc5fb" }}
                      >
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div className="">
                              <p className="mb-1 text-danger">Discount Fee</p>
                              <h2 className="mb-0 text-danger">
                                -${order.saved}
                                <span
                                  className=""
                                  style={{ fontSize: "0.875rem" }}
                                ></span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="">
                  <div className="row rounded shadow p-3">
                    <div className="col-lg-12 mb-4 mb-lg-0">
                      <table className="table align-middle mb-0 bg-white">
                        <thead className="bg-light">
                          <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                        {orderItems?.map((order, index) => (
                          <tr key={index}>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src={order?.product?.image}
                                  style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 10 }}
                                  alt=""
                                />
                                <Link to={`/detail/${order.product.slug}`} className="fw-bold text-dark ms-2 mb-0">
                                  {order?.product?.title}
                                </Link>
                              </div>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">${order.product.price}</p>
                            </td>
                            <td>
                              <p className="fw-normal mb-1">{order.qty}</p>
                            </td>
                            <td>
                              <span className="fw-normal mb-1">${order.sub_total}</span>
                            </td>
                            <td>
                              <span className="fw-normal mb-1 text-danger"> -${order.saved}</span>
                            </td>
                            <td>
                              {order.tracking_id == null || order.tracking_id == 'undefined'
                                ? <button className="btn btn-secondary btn-sm" disabled> No Tracking Yet<i className='fas fa-plus'></i></button>
                                : <a className="btn btn-success btn-sm" target='_blank' href={`${order.delivery_couriers?.tracking_website}?${order.delivery_couriers?.url_parameter}=${order.tracking_id}`}> Track Item <i className='fas fa-location-arrow'></i></a>
                              }
                            </td>
                          </tr>
                        ))}
                         
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  </main>
  
  )
}

export default OrderDetail