import { useState, useEffect } from "react";
import apiInstance from "../../utils/axios";
import UserData from "../plugin/UserData";
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";

function Account() {
  const [profile, setProfile] = useState({});
  const userData = UserData();

  useEffect(() => {
    apiInstance
      .get(`user/profile/${userData?.user_id}/`)
      .then((res) => {
        setProfile(res.data);
        console.log(res.data); // Updated to log the fetched profile
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, [userData?.user_id]); // Added dependency to avoid stale state

  return (
    <main className="mt-5">
      <div className="container">
        <section className="">
          <div className="row">
            <Sidebar />
            <div className="col-lg-9 mt-1">
              <main className="mb-5">
                <div className="container px-4">
                  <section className=""></section>
                  <section className="">
                    <div className="row rounded shadow p-3">
                      <h2>Hi {profile.full_name || "User"},</h2>
                      <div className="col-lg-12 mb-4 mb-lg-0 h-100">
                        From your account dashboard, you can easily check &amp;
                        view your <Link to="/customer/orders/">orders</Link>, manage your{" "}
                        <Link to="/customer/shipping/">shipping</Link>, and{" "}
                        <Link to="/customer/settings/">edit your account</Link>.
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
  );
}

export default Account;