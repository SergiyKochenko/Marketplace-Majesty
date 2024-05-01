import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import apiInstance from '../../utils/axios';
import UserData from '../plugin/UserData';
import Sidebar from './Sidebar';
import Swal from 'sweetalert2'

function VendorSettings() {
    const [profileData, setProfileData] = useState([]);
    const [profileImage, setProfileImage] = useState('');

    const fetchProfileData = () => {
        apiInstance.get(`vendor-settings/${UserData()?.user_id}/`).then((res) => {
            setProfileData(res.data)
            setProfileImage(res.data.image)
        })
    }

    useEffect(() => {
        fetchProfileData()
    }, [])

    const hendleInputChange = (event) => {
        setProfileData({
            ...profileData,
            [event.target.name]: event.target.value

        })
    }

    const hendleFileChange = (event) => {
        setProfileData({
            ...profileData,
            [event.target.name]: event.target.files[0]

        })
    }

    const handleProfileSubmit = async (e) => {
        e.preventDefault()
        const formdata = new FormData()


        const res = await apiInstance.get(`vendor-settings/${UserData()?.user_id}/`)

        if (profileData.image && profileData.image !== res.data.image){
            formdata.append("image", profileData.image)
        }

        formdata.append("full_name", profileData.full_name)
        formdata.append("about", profileData.about)

        await apiInstance.patch(`vendor-settings/${UserData()?.user_id}/`, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        fetchProfileData()
        Swal.fire({
            icon: "success",
            title: "Profile Updated Successfully"
        })

    }


  return (
    <div className="container-fluid" id="main">
  <div className="row row-offcanvas row-offcanvas-left h-100">
    <Sidebar />

    <div className="col-md-9 col-lg-10 main mt-4">
      <div className="container">
        <div className="main-body">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                Profile
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                Shop
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row gutters-sm shadow p-4 rounded">
                <div className="col-md-4 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src={profileImage}
                          style={{ width: 160, height: 160, objectFit: "cover" }}
                          alt="Admin"
                          className="rounded-circle"
                          width={150}
                        />
                        <div className="mt-3">
                          <h4 className="text-dark">{profileData.full_name}</h4>
                          <p className="text-secondary mb-1">{profileData.about}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card mb-3">
                    <div className="card-body">
                      <form
                        className="form-group"
                        method="POST"
                        noValidate=""
                        encType="multipart/form-data"
                        onSubmit={handleProfileSubmit}
                      >
                        <div className="row text-dark">
                          <div className="col-lg-6 mb-2">
                            <label htmlFor="" className="mb-2">
                              Profile Image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              name="image"
                              id=""
                              onChange={hendleFileChange}
                            />
                          </div>
                          <div className="col-lg-6 mb-2 ">
                            <label htmlFor="" className="mb-2">
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id=""
                              value={profileData.full_name}
                              onChange={hendleInputChange}
                              name="full_name"
                            />
                          </div>
                          <div className="col-lg-6 mb-2">
                            <label htmlFor="" className="mb-2">
                              Email
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name=""
                              id=""
                              value={profileData?.user?.email}
                              readOnly
                            />
                          </div>
                          <div className="col-lg-6 mb-2">
                            <label htmlFor="" className="mb-2">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name=""
                              id=""
                              value={profileData?.user?.phone}
                              readOnly
                            />
                          </div>
                          <div className="col-lg-12 mb-2">
                            <label htmlFor="" className="mb-2">
                              About Me
                            </label>
                            <textarea
                              id=""
                              value={profileData?.about}
                              cols="30"
                              rows="10"
                              className="form-control"
                              onChange={hendleInputChange}
                              name="about"
                            >
                            </textarea>
                            
                          </div>
                          <div className="col-lg-6 mt-4 mb-3">
                            <button className="btn btn-success" type="submit">
                              Update Profile <i className="fas fa-check-circle" />{" "}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row gutters-sm shadow p-4 rounded">
                <div className="col-md-4 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src="https://img.freepik.com/free-vector/cartoon-style-cafe-front-shop-view_134830-697.jpg"
                          style={{ width: 160, height: 160, objectFit: "cover" }}
                          alt="Admin"
                          className="rounded-circle"
                          width={150}
                        />
                        <div className="mt-3">
                          <h4 className="text-dark">Desphixs</h4>
                          <p className="text-secondary mb-1">We sell cloths here</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card mb-3">
                    <div className="card-body">
                      <form
                        className="form-group"
                        method="POST"
                        noValidate=""
                        encType="multipart/form-data"
                      >
                        <div className="row text-dark">
                          <div className="col-lg-12 mb-2">
                            <label htmlFor="" className="mb-2">
                              Shop Image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              name=""
                              id=""
                            />
                          </div>
                          <div className="col-lg-12 mb-2 ">
                            <label htmlFor="" className="mb-2">
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name=""
                              id=""
                            />
                          </div>
                          <div className="col-lg-6 mb-2">
                            <label htmlFor="" className="mb-2">
                              Email
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name=""
                              id=""
                            />
                          </div>
                          <div className="col-lg-6 mb-2">
                            <label htmlFor="" className="mb-2">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name=""
                              id=""
                            />
                          </div>
                          <div className="col-lg-6 mt-4 mb-3">
                            <button className="btn btn-success" type="submit">
                              Update Shop <i className="fas fa-check-circle" />{" "}
                            </button>
                            <button className="btn btn-primary" type="submit">
                              View Shop <i className="fas fa-shop" />{" "}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default VendorSettings