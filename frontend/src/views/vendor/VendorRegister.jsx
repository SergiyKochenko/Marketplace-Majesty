import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import apiInstance from '../../utils/axios';
import UserData from '../plugin/UserData';

function VendorRegister() {
  const userData = UserData();
  const navigate = useNavigate();

  if (userData?.vendor_id !== 0) {
    window.location.href = '/vendor/dashboard/';
  }

  const [vendor, setVendor] = useState({
    image: null,
    name: "",
    email: "",
    description: "",
    mobile: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setVendor({
      ...vendor,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setVendor({
      ...vendor,
      [event.target.name]: event.target.files[0],
    });
  };

  const validateForm = () => {
    if (!vendor.image || !vendor.name || !vendor.email || !vendor.mobile || !vendor.description) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "All fields are required. Please fill out the form completely.",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formdata = new FormData();
    setIsLoading(true);

    formdata.append('image', vendor.image);
    formdata.append('name', vendor.name);
    formdata.append('email', vendor.email);
    formdata.append('description', vendor.description);
    formdata.append('mobile', vendor.mobile);
    formdata.append('user_id', userData?.user_id);

    try {
      const res = await apiInstance.post(`vendor-register/`, formdata, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (res.data.message === "Created vendor account") {
        Swal.fire({
          icon: "success",
          title: "Vendor Account Created Successfully",
          text: "Login to continue to dashboard",
        });
        navigate('/logout');
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: res.data.message || "Please check your input and try again.",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.response?.data?.message || "An unexpected error occurred.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="" style={{ marginBottom: 100, marginTop: 50 }}>
      <div className="container">
        <section className="row d-flex justify-content-center">
          <div className="col-xl-5 col-md-8">
            <div className="card rounded-5">
              <div className="card-body p-4">
                <h3 className="text-center">Register Vendor Account</h3>
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="Shop Avatar">
                      Shop Avatar
                    </label>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      name="image"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="Shop Name">
                      Shop Name
                    </label>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      name="name"
                      placeholder="Shop Name"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="Shop Email Address">
                      Shop Email Address
                    </label>
                    <input
                      type="email"
                      onChange={handleInputChange}
                      name="email"
                      placeholder="Shop Email Address"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="Shop Contact Number">
                      Shop Contact Number
                    </label>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      name="mobile"
                      placeholder="Mobile Number"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="Shop Description">
                      Shop Description
                    </label>
                    <textarea
                      className="form-control"
                      onChange={handleInputChange}
                      name="description"
                      cols="30"
                      rows="10"
                      placeholder="Enter a brief description of your shop"
                      required
                    ></textarea>
                  </div>
                  <button
                    className="btn btn-primary w-100"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="mr-2">Processing...</span>
                        <i className="fas fa-spinner fa-spin" />
                      </>
                    ) : (
                      <>
                        <span className="mr-2 me-3">Create Shop</span>
                        <i className="fas fa-shop" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default VendorRegister;