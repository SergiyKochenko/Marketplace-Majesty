import { useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import apiInstance from '../../utils/axios'
import UserData from '../plugin/UserData'
import Swal from 'sweetalert2'
import moment from 'moment'

function CustomerNotification() {
    const [notifications, setNotification] = useState([])


    const fetchNoti = () => {
        apiInstance.get(`customer/notification/${UserData().user_id}/`).then((res) => {
            setNotification(res.data);
            console.log(res.data)
           
        })
    }

    useEffect(() => {
        fetchNoti()
    }, [])

    const MarkNotiAsSeen = (notiId) => {
        apiInstance.get(`customer/notification/${UserData().user_id}/${notiId}/`).then((res) => {
            fetchNoti()
        })
        
        Swal.fire({
            icon: "success",
            text: "Notification Marked As Seen"
        })
    }



  return (
    <main className="mt-5">
  <div className="container">
    <section className="">
      <div className="row">
        <Sidebar />

        <div className="col-lg-9 mt-1">
          <section className="">
            <main className="mb-5" style={{}}>
              <div className="container px-4">
                <section className="">
                  <h3 className="mb-3">
                    <i className="fas fa-bell" /> Notifications{" "}
                  </h3>
                  <div className="list-group">
                    {notifications?.map((n, index) => (

                    
                    <a href="#" key={index} className="list-group-item list-group-item-action">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Order confirmed</h5>
                        <small className='text-muted'>{moment(n.date).format("MMM D, YYYY")}</small>
                      </div>
                      <p className="mb-1">Your order has been confirmed</p>
                      <button onClick={() => MarkNotiAsSeen(n.id)} className='btn btn-success mt-3'><i className='fas fa-eye'></i></button>
                      
                    </a>
                    ))}

                    {notifications.length < 1 && 
                        <h4 className='p-4'>No Notifications Yet  </h4>
                    }

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

export default CustomerNotification