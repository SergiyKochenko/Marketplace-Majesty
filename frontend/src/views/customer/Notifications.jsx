import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import apiInstance from '../../utils/axios';
import UserData from '../plugin/UserData';
import moment from 'moment';

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const userData = UserData();

  useEffect(() => {
    apiInstance
      .get(`customer/notification/${userData?.user_id}/`)
      .then((res) => {
        setNotifications(res.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching notifications:', error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [userData?.user_id]); // Added dependency to avoid stale state

  return (
    <div>
      <main className="mt-5" style={{ marginBottom: 200 }}>
        <div className="container">
          <section className="">
            <div className="row">
              <Sidebar />
              <div className="col-lg-9 mt-1">
                <section className="">
                  <main className="mb-5">
                    <div className="container px-4">
                      <section className="">
                        <h3 className="mb-3">
                          <i className="fas fa-bell" /> Notifications{' '}
                        </h3>
                        {loading ? (
                          <h6>Loading notifications...</h6>
                        ) : (
                          <div className="list-group">
                            {notifications.map((noti, index) => (
                              <div
                                key={noti?.id || index}
                                className="list-group-item list-group-item-action"
                              >
                                <div className="d-flex w-100 justify-content-between">
                                  <h5 className="mb-1">New Order!</h5>
                                  <small>{moment(noti.date).format('MM-DD-YYYY')}</small>
                                </div>
                                <p className="mb-1">
                                  Your order #{noti?.order?.oid} was successful
                                </p>
                                <small>Total: ${noti?.order?.total}</small> <br />
                                <small>Shipping: ${noti?.order?.shipping_amount}</small> <br />
                                <small>Tax: ${noti?.order?.tax_fee}</small> <br />
                                <small>Service Fee: ${noti?.order?.service_fee}</small> <br />
                              </div>
                            ))}

                            {notifications.length < 1 && (
                              <h6>No notifications yet</h6>
                            )}
                          </div>
                        )}
                      </section>
                    </div>
                  </main>
                </section>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Notifications;