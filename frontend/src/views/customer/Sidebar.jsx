import React from 'react'

export default function Sidebar() {
  return (
    <div className="col-lg-3">
        <div className="d-flex justify-content-center align-items-center flex-column mb-4 shadow rounded-3">
          <img
            src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg"
            style={{ width: 120 }}
            alt=""
          />
          <div className="text-center">
            <h3 className="mb-0">Sergiy Kochenko</h3>
            <p className="mt-0">
              <a href="">Edit Account</a>
            </p>
          </div>
        </div>
        <ol className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Account</div>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Orders</div>
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Wishlist</div>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Notification</div>
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Setting</div>
            </div>
          </li>
        </ol>
    </div>
  )
}
