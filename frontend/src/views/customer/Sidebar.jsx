import { useState, useEffect } from "react";
import apiInstance from "../../utils/axios";
import UserData from "../plugin/UserData";
import { Link } from "react-router-dom";

function Sidebar() {
  const [profile, setProfile] = useState({});
  const [orderCount, setOrderCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [notificationCount, setNotificationCount] = useState(0);
  const userData = UserData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileRes = await apiInstance.get(`user/profile/${userData?.user_id}/`);
        setProfile(profileRes.data);

        const ordersRes = await apiInstance.get(`customer/orders/${userData?.user_id}/`);
        setOrderCount(ordersRes.data.length);

        const wishlistRes = await apiInstance.get(`customer/wishlist/${userData?.user_id}/`);
        setWishlistCount(wishlistRes.data.length);

        const notificationsRes = await apiInstance.get(`customer/notification/${userData?.user_id}/`);
        const unreadNotifications = notificationsRes.data.filter((n) => !n.seen).length;
        setNotificationCount(unreadNotifications);
      } catch (error) {
        console.error("Error fetching sidebar data:", error);
      }
    };

    fetchData();
  }, [userData?.user_id]);

  return (
    <div className="col-lg-3">
      <div className="d-flex justify-content-center align-items-center flex-column mb-4 shadow rounded-3">
        <img
          src={profile.image}
          style={{ width: 120, height: 129, objectFit: "cover", borderRadius: "50%" }}
          alt=""
        />
        <div className="text-center">
          <h3 className="mb-0">{profile.full_name}</h3>
          <p className="mt-0">
            <Link to={'/customer/settings/'}>Edit Account</Link>
          </p>
        </div>
      </div>
      <ol className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <Link to='/customer/account/' className="text-dark">Account</Link>
            </div>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <Link to='/customer/orders/' className="text-dark">Orders</Link>
            </div>
          </div>
          <span className="badge bg-primary rounded-pill">{orderCount}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <Link to={'/customer/wishlist/'} className="text-dark">Wishlist</Link>
            </div>
          </div>
          <span className="badge bg-primary rounded-pill">{wishlistCount}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <Link to={'/customer/notifications/'} className="text-dark">Notifications</Link>
            </div>
          </div>
          <span className="badge bg-primary rounded-pill">{notificationCount}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <Link to={'/customer/settings/'} className="text-dark">Settings</Link>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default Sidebar;
