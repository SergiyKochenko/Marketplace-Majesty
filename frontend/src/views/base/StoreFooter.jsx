import React from 'react'

function StoreFooter() {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start">
        {/* Grid container */}
        <div className="container-fluid p-4">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center justify-content-md-start align-items-center">
              <strong>Get connected with us on social networks</strong>
            </div>
            <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
              {/* Facebook */}
              <a
                className="btn btn-primary btn-sm btn-floating me-2"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f" />
              </a>
              {/* Twitter */}
              <a
                className="btn text-white btn-sm btn-floating me-2"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter" />
              </a>
              {/* Pinterest */}
              <a
                className="btn text-white btn-sm btn-floating me-2"
                style={{ backgroundColor: "#c61118" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-pinterest" />
              </a>
              {/* Youtube */}
              <a
                className="btn text-white btn-sm btn-floating me-2"
                style={{ backgroundColor: "#ed302f" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-youtube" />
              </a>
              {/* Instagram */}
              <a
                className="btn text-white btn-sm btn-floating me-2"
                style={{ backgroundColor: "#ac2bac" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <hr className="my-3" />
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <p>
                <strong>About us</strong>
              </p>
              <p>
              Welcome to our multi-sales platform, where vendors and customers converge to create a vibrant marketplace experience.
              <br/>
              <br/>
              At [Majesty], we are dedicated to revolutionizing the way vendors and customers interact, 
              providing a seamless and dynamic environment for buying and selling a diverse array of products.
              <br/>
              <br/>
              For Vendors:
              <br/>
              We understand the challenges of reaching your target audience and maximizing your sales potential. 
              That's why we offer a comprehensive platform designed to empower vendors like you. 
              Whether you're a small business owner, an established brand, or an aspiring entrepreneur, 
              our platform provides the tools and resources you need to showcase your products and connect with customers on a global scale. 
              From streamlined inventory management to powerful marketing tools, we're here to support your success every step of the way.
              <br/>
              <br/>
              For Customers:
              <br/>
              Your shopping journey is at the heart of everything we do. 
              We're committed to creating an exceptional experience that delights and inspires. 
              Discover a world of possibilities as you browse through our curated selection of products from trusted vendors. 
              With user-friendly features and personalized recommendations, finding exactly what you need has never been easier. 
              Whether you're searching for everyday essentials or seeking something special, 
              our platform is your gateway to endless shopping possibilities.
              <br/>
              <br/>
              Together, we're building more than just a marketplace - we're fostering a community of innovation, 
              collaboration, and shared success. Join us on this exciting journey as we continue to redefine the future of online commerce.
              <br/>
              <br/>
              Thank you for choosing [Majesty]. Let's embark on this journey together.
              </p>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 mb-4 mb-lg-0">
              <p>
                <strong>Useful links</strong>
              </p>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Media
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Job offers
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Cooperation
                  </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 mb-4 mb-lg-0">
              <p>
                <strong>Products</strong>
              </p>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark">
                    Electronics
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Fashion
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Beauty
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Automotive
                  </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-2 mb-4 mb-lg-0">
              <p>
                <strong>Support</strong>
              </p>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark">
                    Complaints
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Help center
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
        {/* Copyright */}
      </footer>

    </div>
  )
}

export default StoreFooter